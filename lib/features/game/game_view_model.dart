import 'dart:async';
import 'package:flutter/material.dart';
import 'package:stacktap/core/constants/app_constants.dart';
import 'package:stacktap/core/services/storage_service.dart';

class Block {
  double x; // Left position
  double width;
  Color color;

  Block({required this.x, required this.width, required this.color});

  double get right => x + width;
}

class GameViewModel extends ChangeNotifier {
  // Game state
  List<Block> _blocks = [];
  late Block _movingBlock;
  double _blockSpeed = AppConstants.blockSpeedInitial;
  int _score = 0;
  int _highScore = 0;
  bool _isGameRunning = false;
  bool _isGameOver = false;

  // Getters
  List<Block> get blocks => _blocks;
  Block get movingBlock => _movingBlock;
  int get score => _score;
  int get highScore => _highScore;
  bool get isGameRunning => _isGameRunning;
  bool get isGameOver => _isGameOver;

  // Game loop
  Timer? _gameTimer;
  int _movingDirection = 1; // 1 for right, -1 for left
  double _gameWidth = AppConstants.gameWidth;
  final StorageService _storageService = StorageService();

  GameViewModel({double? gameWidth}) {
    if (gameWidth != null) {
      _gameWidth = gameWidth;
    }
    _highScore = _storageService.getHighScore();
    _resetGame(); // Initialize blocks and moving block
  }

  void startGame() {
    _resetGame();
    _isGameRunning = true;
    _isGameOver = false;
    _startGameLoop();
    notifyListeners();
  }

  void _resetGame() {
    _blocks.clear();
    _score = 0;
    _blockSpeed = AppConstants.blockSpeedInitial;
    _movingDirection = 1;

    // Create first block (baseline)
    _blocks.add(
      Block(
        x: (_gameWidth - AppConstants.maxBlockWidth) / 2,
        width: AppConstants.maxBlockWidth,
        color: AppConstants.blockColors[0],
      ),
    );

    // Create moving block
    _createNewMovingBlock();
  }

  void _createNewMovingBlock() {
    final colorIndex = _blocks.length % AppConstants.blockColors.length;
    _movingBlock = Block(
      x: 0,
      width: AppConstants.maxBlockWidth,
      color: AppConstants.blockColors[colorIndex],
    );
  }

  void _startGameLoop() {
    _gameTimer = Timer.periodic(Duration(milliseconds: 16), (_) {
      if (_isGameRunning && !_isGameOver) {
        _updateGameState();
      }
    });
  }

  void _updateGameState() {
    // Move the block
    _movingBlock.x += _blockSpeed * _movingDirection;

    // Bounce off walls
    if (_movingBlock.x <= 0) {
      _movingBlock.x = 0;
      _movingDirection = 1;
    } else if (_movingBlock.right >= _gameWidth) {
      _movingBlock.x = _gameWidth - _movingBlock.width;
      _movingDirection = -1;
    }

    notifyListeners();
  }

  void dropBlock() {
    if (!_isGameRunning || _isGameOver) return;

    final lastBlock = _blocks.last;

    // Calculate overlap
    final overlapLeft = max(_movingBlock.x, lastBlock.x);
    final overlapRight = min(_movingBlock.right, lastBlock.right);
    final overlapWidth = max(0, overlapRight - overlapLeft);

    // No overlap = game over
    if (overlapWidth == 0) {
      _endGame();
      return;
    }

    // Success! Trim block to overlap
    _movingBlock.x = overlapLeft;
    _movingBlock.width = overlapWidth;

    // Add this block to the stack
    _blocks.add(_movingBlock);

    // Update game state
    _score++;
    _blockSpeed += AppConstants.blockSpeedIncrement;

    // Create new moving block
    _createNewMovingBlock();

    // Check if tower reached top (game over)
    final stackHeight = _blocks.length * AppConstants.blockHeight;
    if (stackHeight >= AppConstants.gameHeight - 100) {
      _endGame();
      return;
    }

    notifyListeners();
  }

  void _endGame() {
    _isGameRunning = false;
    _isGameOver = true;
    _gameTimer?.cancel();

    // Update high score
    if (_score > _highScore) {
      _highScore = _score;
      _storageService.saveHighScore(_highScore);
    }

    notifyListeners();
  }

  void resetForNextGame() {
    _gameTimer?.cancel();
    _resetGame();
    _isGameRunning = false;
    _isGameOver = false;
    notifyListeners();
  }

  @override
  void dispose() {
    _gameTimer?.cancel();
    super.dispose();
  }
}

// Helper functions
double max(double a, double b) => a > b ? a : b;

double min(double a, double b) => a < b ? a : b;
