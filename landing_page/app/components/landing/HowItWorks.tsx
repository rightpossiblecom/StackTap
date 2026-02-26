'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Watch the Block',
      description: 'A colored block moves horizontally across the screen. It moves continuously left and right at the top of the tower.',
    },
    {
      number: 2,
      title: 'Tap to Stack',
      description: 'Tap the screen at the perfect moment to drop the block onto the stack below. Timing is everything!',
    },
    {
      number: 3,
      title: 'Build Higher',
      description: 'If the block aligns with the one below, it sticks. If it\'s partially aligned, it trims and continues the stack. Keep building!',
    },
    {
      number: 4,
      title: 'Game Over',
      description: 'If the block doesn\'t overlap at all with the previous one, the tower falls and your game ends. Your score is saved.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-800 transition">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Master the art of stacking in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step card */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 h-full border border-slate-200 dark:border-slate-700">
                {/* Step number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 text-white font-bold text-lg mb-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>

              {/* Arrow connector */}
              {step.number < steps.length && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Game Loop Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-900 dark:to-slate-900 rounded-xl p-8 border border-blue-200 dark:border-slate-700">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Loop Continues
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Each successful stack increases your score and the game speed. As your tower grows taller, blocks change color—creating a beautiful visual progression. The challenge intensifies with every block, but the satisfaction of a tall tower never gets old.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Beat your high score and challenge your friends. StackTap is endlessly replayable arcade fun.
          </p>
        </div>
      </div>
    </section>
  );
}
