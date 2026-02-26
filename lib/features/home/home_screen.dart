import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:stacktap/core/services/storage_service.dart';
import 'package:stacktap/features/settings/settings_view_model.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text('StackTap'),
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () => Navigator.pushNamed(context, '/settings'),
          ),
          IconButton(
            icon: const Icon(Icons.info_outline),
            onPressed: () => Navigator.pushNamed(context, '/about'),
          ),
        ],
      ),
      body: Consumer<SettingsViewModel>(
        builder: (context, settingsViewModel, _) {
          final storageService = StorageService();
          final highScore = storageService.getHighScore();

          return Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(32),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Game title with icon
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: colorScheme.primary,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Icon(
                      Icons.layers,
                      size: 64,
                      color: colorScheme.onPrimary,
                    ),
                  ),
                  const SizedBox(height: 32),

                  // Title
                  Text(
                    'StackTap',
                    style: theme.textTheme.headlineLarge?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: colorScheme.primary,
                    ),
                  ),
                  const SizedBox(height: 12),

                  // Subtitle
                  Text(
                    'Stack blocks to the sky',
                    style: theme.textTheme.bodyLarge?.copyWith(
                      color: colorScheme.onSurfaceVariant,
                    ),
                  ),
                  const SizedBox(height: 48),

                  // High score display
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: colorScheme.surfaceContainerHighest,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: colorScheme.outline, width: 1),
                    ),
                    child: Column(
                      children: [
                        Text(
                          'High Score',
                          style: theme.textTheme.bodyMedium?.copyWith(
                            color: colorScheme.onSurfaceVariant,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          '$highScore',
                          style: theme.textTheme.displayMedium?.copyWith(
                            color: colorScheme.primary,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 48),

                  // Play button
                  SizedBox(
                    width: double.infinity,
                    height: 56,
                    child: FilledButton.icon(
                      onPressed: () {
                        Navigator.pushNamed(context, '/game');
                      },
                      icon: const Icon(Icons.play_arrow),
                      label: const Text('Tap to Start'),
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
