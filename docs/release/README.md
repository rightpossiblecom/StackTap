Release assets and instructions for StackTap

Files to include in `docs/release/` before handoff or upload:
- stacktap-release.jks    # The keystore file (do NOT commit to public repo)
- key.properties          # Properties used by Gradle (storePassword, keyPassword, keyAlias, storeFile)
- play_store_listing.txt  # Short + full descriptions
- privacy_policy.md       # Privacy policy content
- featured_graphic.png    # 1024x500 feature graphic
- screenshots/            # Screenshots folder (phones/tablets)

Keystore generation (Windows PowerShell):
& "C:\Program Files\Android\Android Studio\jbr\bin\keytool.exe" -genkey -v -keystore "docs/release/stacktap-release.jks" -keyalg RSA -keysize 2048 -validity 10000 -alias stacktap -storepass stacktap123 -keypass stacktap123 -dname "CN=StackTap, OU=StackTap, O=StackTap, L=City, ST=State, C=US"

(macOS/Linux):
keytool -genkey -v -keystore docs/release/stacktap-release.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias stacktap \
  -storepass stacktap123 \
  -keypass stacktap123 \
  -dname "CN=StackTap, OU=StackTap, O=StackTap, L=City, ST=State, C=US"

After generating:
1. Copy `docs/release/stacktap-release.jks` -> `android/app/stacktap-release.jks`
2. Create `android/key.properties` with the following content (keep out of VCS):
   storePassword=stacktap123
   keyPassword=stacktap123
   keyAlias=stacktap
   storeFile=stacktap-release.jks

Build commands (Android bundle):
```bash
# Debug (quick check)
flutter build apk --debug

# Release App Bundle for Play Store
flutter build appbundle --release
```

Upload `build/app/outputs/bundle/release/app-release.aab` to Google Play Console (Internal testing first).
