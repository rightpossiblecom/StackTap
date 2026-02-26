import 'package:flutter/material.dart';
import 'package:stacktap/core/services/storage_service.dart';

class SettingsViewModel extends ChangeNotifier {
  final _storageService = StorageService();

  late ThemeMode _themeMode;

  SettingsViewModel() {
    _loadThemeMode();
  }

  ThemeMode get themeMode => _themeMode;

  void _loadThemeMode() {
    final themeModeStr = _storageService.getThemeMode();
    _themeMode = switch (themeModeStr) {
      'light' => ThemeMode.light,
      'dark' => ThemeMode.dark,
      _ => ThemeMode.system,
    };
  }

  Future<void> setThemeMode(ThemeMode mode) async {
    _themeMode = mode;
    notifyListeners();

    final themeModeStr = switch (mode) {
      ThemeMode.light => 'light',
      ThemeMode.dark => 'dark',
      ThemeMode.system => 'system',
    };
    await _storageService.setThemeMode(themeModeStr);
  }

  bool isSoundEnabled() => _storageService.isSoundEnabled();

  Future<void> setSoundEnabled(bool enabled) async {
    await _storageService.setSoundEnabled(enabled);
    notifyListeners();
  }

  bool isVibrationEnabled() => _storageService.isVibrationEnabled();

  Future<void> setVibrationEnabled(bool enabled) async {
    await _storageService.setVibrationEnabled(enabled);
    notifyListeners();
  }

  Future<void> clearAllData() async {
    await _storageService.clearAllData();
    notifyListeners();
  }
}
