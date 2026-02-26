import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:stacktap/core/services/storage_service.dart';
import 'package:stacktap/core/theme/app_theme.dart';
import 'package:stacktap/features/home/home_screen.dart';
import 'package:stacktap/features/settings/settings_screen.dart';
import 'package:stacktap/features/about/about_screen.dart';
import 'package:stacktap/features/game/game_screen.dart';
import 'package:stacktap/features/game/game_view_model.dart';
import 'package:stacktap/features/game_over/game_over_screen.dart';
import 'features/settings/settings_view_model.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final storageService = StorageService();
  await storageService.init();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => SettingsViewModel(),
      child: Consumer<SettingsViewModel>(
        builder: (context, settingsViewModel, _) {
          return MaterialApp(
            title: 'StackTap',
            debugShowCheckedModeBanner: false,
            theme: AppTheme.lightTheme,
            darkTheme: AppTheme.darkTheme,
            themeMode: settingsViewModel.themeMode,
            home: const HomeScreen(),
            routes: {
              '/home': (context) => const HomeScreen(),
              '/settings': (context) => const SettingsScreen(),
              '/about': (context) => const AboutScreen(),
            },
            onGenerateRoute: (settings) {
              if (settings.name == '/game') {
                return MaterialPageRoute(
                  builder: (context) => ChangeNotifierProvider(
                    create: (_) => GameViewModel(),
                    child: const GameScreen(),
                  ),
                );
              } else if (settings.name == '/game_over') {
                final score = settings.arguments as int? ?? 0;
                return MaterialPageRoute(
                  builder: (context) => GameOverScreen(score: score),
                );
              }
              return null;
            },
          );
        },
      ),
    );
  }
}
