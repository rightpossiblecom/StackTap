import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:stacktap/core/constants/app_constants.dart';
import 'package:stacktap/features/game/game_view_model.dart';

class GameScreen extends StatefulWidget {
  const GameScreen({super.key});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<GameViewModel>().startGame();
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text('StackTap'),
        leading: IconButton(
          icon: const Icon(Icons.close),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: Consumer<GameViewModel>(
        builder: (context, gameViewModel, _) {
          if (gameViewModel.isGameOver) {
            WidgetsBinding.instance.addPostFrameCallback((_) {
              Navigator.pushReplacementNamed(
                context,
                '/game_over',
                arguments: gameViewModel.score,
              );
            });
          }

          return GestureDetector(
            onTap: gameViewModel.isGameRunning
                ? () => gameViewModel.dropBlock()
                : null,
            child: Container(
              color: colorScheme.surface,
              child: Stack(
                children: [
                  // Game canvas
                  Container(
                    margin: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: colorScheme.surfaceContainerLowest,
                      border: Border.all(color: colorScheme.outline, width: 2),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Stack(
                      children: [
                        // Stacked blocks
                        ...gameViewModel.blocks.asMap().entries.map((entry) {
                          final index = entry.key;
                          final block = entry.value;
                          final topPosition =
                              AppConstants.gameHeight -
                              ((index + 1) * AppConstants.blockHeight);

                          return Positioned(
                            left: block.x,
                            top: topPosition,
                            child: Container(
                              width: block.width,
                              height: AppConstants.blockHeight,
                              decoration: BoxDecoration(
                                color: block.color,
                                borderRadius: BorderRadius.circular(4),
                                boxShadow: [
                                  BoxShadow(
                                    color: block.color.withOpacity(0.5),
                                    blurRadius: 8,
                                    offset: const Offset(0, 4),
                                  ),
                                ],
                              ),
                            ),
                          );
                        }),

                        // Moving block at top
                        Positioned(
                          left: gameViewModel.movingBlock.x,
                          top: 20,
                          child: Container(
                            width: gameViewModel.movingBlock.width,
                            height: AppConstants.blockHeight,
                            decoration: BoxDecoration(
                              color: gameViewModel.movingBlock.color,
                              borderRadius: BorderRadius.circular(4),
                              boxShadow: [
                                BoxShadow(
                                  color: gameViewModel.movingBlock.color
                                      .withOpacity(0.7),
                                  blurRadius: 12,
                                  offset: const Offset(0, 6),
                                ),
                              ],
                            ),
                          ),
                        ),

                        // Tap instruction
                        if (gameViewModel.isGameRunning)
                          Positioned(
                            bottom: 20,
                            left: 0,
                            right: 0,
                            child: Center(
                              child: Text(
                                'Tap to Drop',
                                style: theme.textTheme.labelLarge?.copyWith(
                                  color: colorScheme.onSurfaceVariant,
                                ),
                              ),
                            ),
                          ),
                      ],
                    ),
                  ),

                  // Score display
                  Positioned(
                    top: 16,
                    right: 16,
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 8,
                      ),
                      decoration: BoxDecoration(
                        color: colorScheme.primary,
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            'Score: ',
                            style: theme.textTheme.labelMedium?.copyWith(
                              color: colorScheme.onPrimary,
                            ),
                          ),
                          Text(
                            '${gameViewModel.score}',
                            style: theme.textTheme.headlineSmall?.copyWith(
                              color: colorScheme.onPrimary,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
