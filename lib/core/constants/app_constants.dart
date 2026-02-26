import 'package:flutter/material.dart';

class AppConstants {
  // Game constants
  static const double gameWidth = 400;
  static const double gameHeight = 600;
  static const double blockHeight = 30;
  static const double minBlockWidth = 50;
  static const double maxBlockWidth = 200;
  static const double blockSpeedInitial = 2.0;
  static const double blockSpeedIncrement = 0.1;

  // Block colors - Color progression
  static const List<Color> blockColors = [
    Color(0xFF3B82F6), // Blue
    Color(0xFF8B5CF6), // Purple
    Color(0xFFEC4899), // Pink
    Color(0xFFF59E0B), // Amber
    Color(0xFF10B981), // Emerald
    Color(0xFF06B6D4), // Cyan
    Color(0xFF6366F1), // Indigo
  ];

  // Storage keys
  static const String highScoreKey = 'high_score';
  static const String soundEnabledKey = 'sound_enabled';
  static const String vibrationEnabledKey = 'vibration_enabled';
  static const String themeKey = 'theme_mode'; // light, dark, system
}
