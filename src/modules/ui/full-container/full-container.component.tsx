import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';
import './full-container.css';
import AntaresActions from '../actions/actions.component';
import AntaresBigIndicator from '../big-indicator/big-indicator.component';
import AntaresRoundyListItem from '../roundy-list-item/roundy-list-item.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import AntaresMinimalPieChart from '../../charts/minimal-pie-chart/minimal-pie-chart.component';
import AntaresNavbar from '../navbar/navbar.component';
import AntaresSimpleCalendar from '../simple-calendar/simple-calendar.component';

interface Props {
  className?: ClassValue;
  color?: string;
}

const AntaresFullContainer: React.FC<Props> = ({
  className,
  color = '#2B2F8E',
}) => {
  return (
    <div
      className={classnames('antares-full-container w-full', className)}
      style={{ backgroundColor: color }}
    >
      <AntaresActions></AntaresActions>
      <div className="flex flex-col py-10 px-12">
        <img
          src="https://i.imgur.com/F2ghWSM.png"
          alt="Deimos"
          style={{ width: '64px' }}
        />

        <div className="flex flex-col mt-8">
          <div className="flex flex-row mb-16">
            <AntaresBigIndicator
              tag="Total budget"
              value="$12,800"
            ></AntaresBigIndicator>
            <span className="spacer"></span>
            <AntaresBigIndicator
              tag="Pending"
              value="$3,530"
            ></AntaresBigIndicator>
          </div>

          {/* Projects */}
          <div
            className="flex flex-col"
            style={{ height: '90%', overflowY: 'auto' }}
          >
            <AntaresRoundyListItem selected={true}>
              <div className="flex flex-row items-center ml-8">
                <strong className="text-xl font-bold text-white">
                  All Projects
                </strong>
                <span className="spacer"></span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  color="white"
                  className="mr-4"
                ></FontAwesomeIcon>
              </div>
            </AntaresRoundyListItem>

            {[
              {
                name: 'Antares',
                budget: '$4,100',
                stage: 'Sprint 3',
              },
              {
                name: 'vIPN',
                budget: '$12,500',
                stage: 'Planning',
              },
              {
                name: 'Plantae',
                budget: '$30,000',
                stage: 'QA Phase 1',
              },
            ].map((project) => (
              <AntaresRoundyListItem className="mt-6" key={project.name}>
                <div className="flex flex-row items-center">
                  <AntaresMinimalPieChart
                    height="90px"
                    className="mx-6 w-1/4"
                  ></AntaresMinimalPieChart>
                  <div className="flex flex-col">
                    <h5 className="text-xl font-bold text-white">
                      {project.name}
                    </h5>
                    <div className="flex flex-row mt-2">
                      <div className="flex flex-col mr-4">
                        <small className="text-xs text-gray-500">Budget</small>
                        <span className="text-white text-sm">
                          {project.budget}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <small className="text-xs text-gray-500">Stage</small>
                        <span className="text-white text-sm">
                          {project.stage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AntaresRoundyListItem>
            ))}
          </div>

          {/* Add Project */}
          <div className="flex flex-col items-center justify-center w-full mt-16">
            <button className="flex flex-row items-center justify-center w-full">
              <span className="text-gray-600 mr-4">Add Project</span>
              <div
                className="rounded-full bg-white flex flex-col items-center justify-center"
                style={{ width: '32px', height: '32px' }}
              >
                <FontAwesomeIcon icon={faPlus} color="black"></FontAwesomeIcon>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <AntaresNavbar></AntaresNavbar>

        <div className="antares-full-container__content p-12 h-full">
          <div className="w-1/2 flex flex-col">
            <AntaresSimpleCalendar></AntaresSimpleCalendar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntaresFullContainer;
