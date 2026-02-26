import 'package:flutter/material.dart';

class AppTheme {
  // Primary brand color - Vibrant emerald for arcade feel
  static const Color _primaryColor = Color(0xFF10B981);

  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    colorScheme: ColorScheme.fromSeed(
      seedColor: _primaryColor,
      brightness: Brightness.light,
    ),
    appBarTheme: const AppBarTheme(elevation: 0, centerTitle: true),
    scaffoldBackgroundColor: const Color(0xFFF9FAFB),
  );

  static ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorScheme: ColorScheme.fromSeed(
      seedColor: _primaryColor,
      brightness: Brightness.dark,
    ),
    appBarTheme: const AppBarTheme(elevation: 0, centerTitle: true),
    scaffoldBackgroundColor: const Color(0xFF111827),
  );
}
