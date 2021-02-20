import {
  faBook,
  faBoxOpen,
  faClock,
  faFolderOpen,
  faHome,
  faPaperclip,
  faSlidersH,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AntaresMinimalLineChart from '../../charts/minimal-line-chart/minimal-line-chart.component';
import AntaresAppleCard from '../../ui/apple-card/apple-card.component';
import AntaresBar from '../../ui/bar/bar.component';
import AntaresColorCard from '../../ui/color-card/color-card.component';
import AntaresContainer from '../../ui/container/container.component';
import AntaresDataCard from '../../ui/data-card/data-card.component';
import AntaresDataContainer from '../../ui/data-container/data-container.component';
import AntaresDropzone from '../../ui/dropzone/dropzone.component';
import InfoCard from '../../ui/info-card/info-card.component';
import AntaresSimpleList from '../../ui/simple-list/simple-list.component';
import type { RouteComponentProps } from '@reach/router';

const MockDashboardPage: React.FC<RouteComponentProps> = () => {
  return (
    <AntaresContainer>
      <div className="p-12 flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/3">
            <h5 className="text-xs mb-1 text-gray-800">Invoices</h5>
            <div className="flex flex-row justify-between">
              <InfoCard value="$14,095" footer="Overdue"></InfoCard>
              <InfoCard value="$33,383" footer="Total outstanding"></InfoCard>
              <InfoCard value="$4,500" footer="In draft"></InfoCard>
            </div>
          </div>

          <div className="flex flex-col w-2/3 ml-16">
            <h5 className="text-xs mb-1 text-gray-800">Outstanding revenue</h5>
            <div className="flex flex-row justify-between">
              <InfoCard
                value="$31.3k"
                footer="14 days remaining"
                valueExtra={
                  <AntaresBar
                    width="40%"
                    height="16px"
                    className="mr-4"
                  ></AntaresBar>
                }
                className="w-full"
              ></InfoCard>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-16">
          <div className="w-1/3 mr-12">
            <AntaresDataContainer
              title="Total profit"
              subtitle="September 2020"
              actions={<FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>}
            ></AntaresDataContainer>
          </div>

          <div className="w-2/3">
            <AntaresDataContainer
              title="Expenses"
              actions={<FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>}
            ></AntaresDataContainer>
          </div>
        </div>

        <div className="flex flex-row mt-8">
          <div className="w-1/3 mr-8">
            <AntaresColorCard title="$22.3k" color="#FAF8F3">
              <div style={{ height: '250px' }}>
                <AntaresSimpleList
                  className="mt-4 absolute z-10 mx-8"
                  items={[
                    {
                      color: '#FB9600',
                      text: '$64.3k income',
                      classes: 'mb-1',
                    },
                    {
                      color: 'black',
                      text: '$12.8k expenses',
                      classes: 'mb-1',
                    },
                  ]}
                ></AntaresSimpleList>
                <AntaresMinimalLineChart></AntaresMinimalLineChart>
              </div>
            </AntaresColorCard>
          </div>

          <div className="w-2/3 flex flex-row gap-4">
            <AntaresColorCard
              title="$20.00"
              subtitle="23 Sep, 2020"
              color="#F0F4FF"
              actions={
                <FontAwesomeIcon
                  icon={faPaperclip}
                  color="rgba(0,0,0,0.2)"
                ></FontAwesomeIcon>
              }
            >
              <div className="h-full p-8 flex flex-col justify-end">
                <FontAwesomeIcon icon={faHome} size="4x"></FontAwesomeIcon>
                <span className="mt-3 text-lg">Real State</span>
              </div>
            </AntaresColorCard>
            <AntaresColorCard
              title="$30.00"
              subtitle="26 Sep, 2020"
              color="#EEFCEF"
              actions={
                <FontAwesomeIcon
                  icon={faPaperclip}
                  color="rgba(0,0,0,0.2)"
                ></FontAwesomeIcon>
              }
            >
              <div className="h-full p-8 flex flex-col justify-end">
                <FontAwesomeIcon icon={faClock} size="4x"></FontAwesomeIcon>
                <span className="mt-3 text-lg">Watches</span>
              </div>
            </AntaresColorCard>
            <AntaresColorCard
              title="$60.00"
              subtitle="29 Sep, 2020"
              color="#E5F5FA"
              actions={
                <FontAwesomeIcon
                  icon={faPaperclip}
                  color="rgba(0,0,0,0.2)"
                ></FontAwesomeIcon>
              }
            >
              <div className="h-full p-8 flex flex-col justify-end">
                <FontAwesomeIcon icon={faBook} size="4x"></FontAwesomeIcon>
                <span className="mt-3 text-lg">Books</span>
              </div>
            </AntaresColorCard>
          </div>
        </div>

        <div className="flex flex-row mt-16">
          <div className="w-2/3 mr-12">
            <AntaresDataContainer
              title="Invoices"
              subtitle="recently created"
              actions={
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="ml-4"
                  ></FontAwesomeIcon>
                </div>
              }
            >
              <div className="flex flex-row mt-8 gap-4">
                <div className="w-1/3">
                  <AntaresDropzone></AntaresDropzone>
                </div>
                <div className="w-1/3">
                  <AntaresDataCard
                    borderColor="#FB9600"
                    header="#00106"
                    title="Mindtickle"
                    subtitle="2 Sep, 2020"
                    footerTag="Viewed"
                    footerValue="$3,500"
                  ></AntaresDataCard>
                </div>
                <div className="w-1/3">
                  <AntaresDataCard
                    borderColor="#12715A"
                    header="#00105"
                    title="EpsiDev"
                    subtitle="1 Sep, 2020"
                    footerTag="Sent"
                    footerValue="$2,400"
                  ></AntaresDataCard>
                </div>
              </div>
            </AntaresDataContainer>
          </div>

          <div className="w-1/3">
            <AntaresAppleCard
              text="Work Anywhere with the Invoicer Mobile Apps"
              img="https://i.imgur.com/kHtntkH.png"
            ></AntaresAppleCard>
          </div>
        </div>
      </div>
    </AntaresContainer>
  );
};

export default MockDashboardPage;
