import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  description,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  description?: string[];
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <h3 className="font-semibold">{`${position} @ `}
      <a href={companyLink} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline">
        {company}
      </a>
    </h3>
    <div className="my-0.5 text-xs mb-2">{time}</div>
    {description && (
      <ul className="list-disc ml-4">
        {description.map((d, index) => (
          <li key={index} className="text-sm text-base-content text-opacity-60">
            {d}
          </li>
        ))}
      </ul>
    )}
  </li>
);

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="col-span-2">
          <div className="card compact bg-base-100 shadow bg-opacity-40">
            <div className="card-body">
              <div className="mx-3 flex mb-2">
                <h5 className="card-title">
                  {loading ? (
                    skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                  ) : (
                    <span className="text-base-content opacity-70">
                      Experience
                    </span>
                  )}
                </h5>
              </div>
              <div className="col-span-2">
                <div className="text-base-content text-opacity-60">
                  <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                    {loading ? (
                      renderSkeleton()
                    ) : (
                      <Fragment>
                        {experiences.map((experience, index) => (
                          <ListItem
                            key={index}
                            time={`${experience.from} - ${experience.to}`}
                            position={experience.position}
                            company={experience.company}
                            companyLink={
                              experience.companyLink
                                ? experience.companyLink
                                : undefined
                            }
                            description={experience.description}
                          />
                        ))}
                      </Fragment>
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Fragment>
    <div className="col-span-1 shadow-lg compact bg-base-100 bg-opacity-40">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Experience</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences.map((experience, index) => (
                  <ListItem
                    key={index}
                    time={`${experience.from} - ${experience.to}`}
                    position={experience.position}
                    company={experience.company}
                    companyLink={
                      experience.companyLink
                        ? experience.companyLink
                        : undefined
                    }
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div> */}
    </Fragment>
  );
};

export default ExperienceCard;
