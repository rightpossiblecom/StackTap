import 'package:hive_flutter/hive_flutter.dart';

class StorageService {
  static final StorageService _instance = StorageService._internal();

  factory StorageService() {
    return _instance;
  }

  StorageService._internal();

  late Box<String> _gameDataBox;
  late Box<String> _settingsBox;

  Future<void> init() async {
    await Hive.initFlutter();
    _gameDataBox = await Hive.openBox<String>('game_data');
    _settingsBox = await Hive.openBox<String>('settings');
  }

  // Game data methods
  int getHighScore() {
    final score = _gameDataBox.get('high_score') ?? '0';
    return int.tryParse(score) ?? 0;
  }

  Future<void> saveHighScore(int score) async {
    await _gameDataBox.put('high_score', score.toString());
  }

  // Settings methods
  bool isSoundEnabled() {
    final value = _settingsBox.get('sound_enabled') ?? 'true';
    return value == 'true';
  }

  Future<void> setSoundEnabled(bool enabled) async {
    await _settingsBox.put('sound_enabled', enabled.toString());
  }

  bool isVibrationEnabled() {
    final value = _settingsBox.get('vibration_enabled') ?? 'true';
    return value == 'true';
  }

  Future<void> setVibrationEnabled(bool enabled) async {
    await _settingsBox.put('vibration_enabled', enabled.toString());
  }

  String getThemeMode() {
    return _settingsBox.get('theme_mode') ?? 'system';
  }

  Future<void> setThemeMode(String mode) async {
    await _settingsBox.put('theme_mode', mode);
  }

  Future<void> clearAllData() async {
    await _gameDataBox.clear();
    await _settingsBox.clear();
  }
}
