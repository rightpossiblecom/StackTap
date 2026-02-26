'use client';

export default function Features() {
  const features = [
    {
      title: 'Simple Tap Mechanics',
      description: 'Tap once to drop the block. No complicated controls. Just pure arcade gameplay.',
      icon: '📱',
    },
    {
      title: 'Dynamic Block Stacking',
      description: 'Blocks trim to fit when partially aligned. Precision timing creates the perfect tower.',
      icon: '🧱',
    },
    {
      title: 'Progressive Difficulty',
      description: 'Game speed increases as your stack grows taller. Stay focused and maintain precision.',
      icon: '⚡',
    },
    {
      title: 'Color Progression',
      description: 'Watch your tower change colors as you build higher. Visual satisfaction at every level.',
      icon: '🎨',
    },
    {
      title: 'Local High Scores',
      description: 'Your best score is saved locally. Challenge yourself to beat your personal record.',
      icon: '🏆',
    },
    {
      title: 'Zero Ads & Free',
      description: 'Pure arcade experience without interruptions. Play as much as you want for free.',
      icon: '✨',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900 transition">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why You'll Love StackTap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Designed for arcade lovers who want a quick thrill and endless replayability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-lg transition transform duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
