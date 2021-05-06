import React from 'react';

type StatItem = {
  stat: string
  description: string
}

type StatBoxProps = {
  item: StatItem
}

type StatsProps = {
  title: string
  description: string
  stats: Array<StatItem>
}

const StatBox: React.FC<StatBoxProps> = ({item}) => (
  <div className="py-6 md:py-0 md:px-8">
    <div className="text-4xl font-bold leading-tight tracking-tighter text-primary mb-2" data-aos="fade-up">{item.stat}</div>
    <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">{item.description}</div>
  </div>
)

const Stats: React.FC<StatsProps> = ({ title, description, stats}) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{title}</h1>
            <p className="text-xl text-gray-400">{description}</p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {stats.map((item, index) => (
              <StatBox item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;