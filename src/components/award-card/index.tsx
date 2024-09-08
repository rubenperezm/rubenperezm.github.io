import React from 'react';
import { SanitizedAward } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  title,
  year,
}: {
  title: React.ReactNode;
  year: React.ReactNode;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-primary rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{year}</div>
    <div className="font-medium">
        {title}
    </div>
  </li>
);

const AwardCard = ({
  awards,
  loading,
}: {
  awards: SanitizedAward[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          title={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                Awards
              </span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-primary border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {awards.map((award, index) => (
                  <ListItem
                    key={index}
                    title={award.title}
                    year={award.year}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
