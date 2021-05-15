# Mobile App Cleaner

![Mobile App Cleaner Demo](img/demo.gif)

You can use this CLI Tool to clean your iOS and Android projects and keep them updated. This tool automatizes these items below;

- Clean iOS Folders
- Install iOS Pod

- Clean Android Folder
- Clean Android Gradlew

- Verify NPM Cache
- Install NPM Dependencies

- Clean Cache (React Native Cache, Metro Bundler Cache, Watchman Cache etc.)

## Installation

You need to install [Node.js](https://nodejs.org/en/download/) first, then install the tool globally using this command:

```bash
npm install -g mobile-app-cleaner
```

## How to use

You can start cleaning process for iOS and Android projects with this one line command below.

```bash
mobile-app-cleaner
```

If you want to start this tool just for iOS:

```bash
mobile-app-cleaner --ios
```

If you want to start this tool just for Android:

```bash
mobile-app-cleaner --android
```

## Verbose

If you want to see what this tool is doing in the background, you can give --verbose parameter.

```bash
mobile-app-cleaner --verbose
```

## Support

If you have an issue with this CLI tool, please open an [issue](https://github.com/automizer/mobile-app-cleaner/issues).

## Contributing

Pull requests are welcome.

## License

This project is licensed under the MIT License