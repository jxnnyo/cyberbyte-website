import React from "react";

type StatItem = {
  stat: string;
  description: string;
};

type StatBoxProps = {
  item: StatItem;
};

type StatsProps = {
  title: string;
  description: string;
  stats: Array<StatItem>;
};

const StatBox: React.FC<StatBoxProps> = ({ item }) => (
  <div className="py-6 md:py-0 md:px-8">
    <div className="mb-2 text-4xl font-bold leading-tight tracking-tighter text-primary">
      {item.stat}
    </div>
    <div className="text-lg text-gray-400">{item.description}</div>
  </div>
);

const Stats: React.FC<StatsProps> = ({ title, description, stats }) => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h2 mb-4">{title}</h1>
            <p className="text-xl text-gray-400">{description}</p>
          </div>

          <div className="grid divide-y divide-gray-700 bg-gray-800 px-6 text-center md:grid-cols-3 md:divide-y-0 md:divide-x md:px-0 md:py-8">
            {stats.map((item, index) => (
              <StatBox item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
