import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:stacktap/features/settings/settings_view_model.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: Consumer<SettingsViewModel>(
        builder: (context, settingsViewModel, _) {
          return ListView(
            children: [
              // Theme section
              Padding(
                padding: const EdgeInsets.all(16),
                child: Text(
                  'Appearance',
                  style: theme.textTheme.titleMedium?.copyWith(
                    color: colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ListTile(
                title: const Text('Theme'),
                subtitle: const Text('Light / Dark / System'),
                trailing: DropdownButton<ThemeMode>(
                  value: settingsViewModel.themeMode,
                  items: ThemeMode.values
                      .map(
                        (mode) => DropdownMenuItem(
                          value: mode,
                          child: Text(mode.name.capitalize()),
                        ),
                      )
                      .toList(),
                  onChanged: (mode) {
                    if (mode != null) {
                      settingsViewModel.setThemeMode(mode);
                    }
                  },
                ),
              ),

              const Divider(),

              // Sound & Vibration section
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
                child: Text(
                  'Sound & Feedback',
                  style: theme.textTheme.titleMedium?.copyWith(
                    color: colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              CheckboxListTile(
                title: const Text('Sound Effects'),
                value: settingsViewModel.isSoundEnabled(),
                onChanged: (enabled) {
                  if (enabled != null) {
                    settingsViewModel.setSoundEnabled(enabled);
                  }
                },
              ),
              CheckboxListTile(
                title: const Text('Vibration'),
                value: settingsViewModel.isVibrationEnabled(),
                onChanged: (enabled) {
                  if (enabled != null) {
                    settingsViewModel.setVibrationEnabled(enabled);
                  }
                },
              ),

              const Divider(),

              // Game Data section
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
                child: Text(
                  'Game Data',
                  style: theme.textTheme.titleMedium?.copyWith(
                    color: colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ListTile(
                title: const Text('Clear App Data'),
                subtitle: const Text('Reset high score and all settings'),
                trailing: Icon(Icons.delete_outline, color: colorScheme.error),
                onTap: () {
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: const Text('Clear App Data?'),
                      content: const Text(
                        'This will reset your high score and all settings. This action cannot be undone.',
                      ),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Cancel'),
                        ),
                        FilledButton.tonal(
                          onPressed: () {
                            settingsViewModel.clearAllData();
                            Navigator.pop(context);
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('App data cleared')),
                            );
                          },
                          child: const Text('Clear'),
                        ),
                      ],
                    ),
                  );
                },
              ),

              const Divider(),

              // Links section
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
                child: Text(
                  'Information',
                  style: theme.textTheme.titleMedium?.copyWith(
                    color: colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ListTile(
                title: const Text('Privacy Policy'),
                trailing: const Icon(Icons.open_in_new),
                onTap: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text(
                        'Privacy Policy: We do not collect any personal data',
                      ),
                    ),
                  );
                },
              ),
              ListTile(
                title: const Text('Terms of Service'),
                trailing: const Icon(Icons.open_in_new),
                onTap: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text(
                        'Terms: Use StackTap responsibly and enjoy!',
                      ),
                    ),
                  );
                },
              ),
              ListTile(
                title: const Text('About'),
                trailing: const Icon(Icons.open_in_new),
                onTap: () {
                  Navigator.pushNamed(context, '/about');
                },
              ),
              const SizedBox(height: 32),
            ],
          );
        },
      ),
    );
  }
}

extension on String {
  String capitalize() {
    return '${this[0].toUpperCase()}${substring(1)}';
  }
}
