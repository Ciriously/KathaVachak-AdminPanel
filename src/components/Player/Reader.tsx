import React from 'react';
import ScreenPlayer from './screenplayer';

const sectionsData = [
  {
    title: 'Chapter - 1',
    description:
      'TRULY, "thoughts are things," and powerful things at that, when they are mixed with definiteness of purpose, persistence, and a BURNING DESIRE for their translation into riches, or other material objects. A little more than thirty years ago, Edwin C. Barnes discovered how true it is that men really do THINK AND GROW RICH. His discovery did not come about at one sitting. are things," and powerful things at that, when they are mixed with definiteness of purpose, persistence, and a BURNING DESIRE for their translation into riches, or other material objects. A little more than thirty years ago, Edwin C. Barnes discovered how true it is that men really do THINK AND GROW RICH. His discovery did not come about at one sitting.TRULY, "thoughts are thin and powerful things at that, when they are mixed with definiteness of purpose, persistence, and a BURNING DESIRE for their translation into riches, or other material objects. A little more than thirty years ago, Edwin C. Barnes discovered how true it is that men really do THINK AND GROW RICH. His discovery did not come about at one sitting.',
    button1: 'Button 1',
    switchContent: false, // Image on the left, content on the right
  },
];

// Define keywords and their associated colors
const keywords = [
  {
    keyword:
      'THINK AND GROW RICH. His discovery did not come about at one sitting. are things," and powerful things at that, when they are mixed with definiteness of purpose, persistence, and a BURNING DESIRE for their translation into riches, or other material objects. A little more than thirty years ago, Edwin C. Barnes discovered how true it is that men really do THINK AND GROW RICH. His discovery did not come about at one sitting.TRULY',
    color: '#865DFF',
  },
];

const Reader = () => {
  // Function to replace keywords in description with colored spans
  const highlightKeywords = (description: string) => {
    let newDescription = description;
    keywords.forEach(({ keyword, color }) => {
      const regex = new RegExp(keyword, 'gi'); // Case-insensitive global match
      newDescription = newDescription.replace(
        regex,
        `<strong style="color: ${color}; font-weight: bold;">${keyword}</strong>`,
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: newDescription }} />;
  };

  return (
    <div className="flex justify-center items-center w-full">
      {sectionsData.map((section, index) => (
        <section key={index} className="bg-white w-3/4 rounded-3xl">
          <div className="container mx-auto py-12 md:py-0">
            <div className="max-w-5xl font-poppins mx-auto rounded-lg p-8">
              <h1 className="text-3xl font-medium text-center text-[#2E3271] mb-8">
                {section.title}
              </h1>
              <p className="text-xl font-normal text-black leading-relaxed">
                {highlightKeywords(section.description)}
              </p>
            </div>
            <div className="bg-[#F3EFFF] rounded-3xl flex justify-center mt-8">
              <ScreenPlayer />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Reader;
