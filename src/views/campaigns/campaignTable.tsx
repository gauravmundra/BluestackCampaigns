import * as React from "react";
import { ICampaignsProps, Campaign, CampaignData } from "./ICampaign";
import Button from "react-bootstrap/Button";
import { FormatedDate, today, DifferenceInDays } from "../../utils/config";
import logo from "../../assets/images/80.png";
import calendar from "../../assets/images/calendar.png";
import Price from "../../assets/images/Price.png";
import statistics from "../../assets/images/statistics-report.png";
import file from "../../assets/images/file.png";
import LanguageContext from "../../context";
import LocalizedStrings from "react-localization";
import localizations from "../../loc";
let strings = new LocalizedStrings(localizations);

export interface ICampaignTableProps {
  data: Campaign[];
  OpenModal: Function;
  CloseModal: Function;
}

export const CampaignTable: React.FC<ICampaignTableProps> = (props: React.PropsWithChildren<ICampaignTableProps>) => {
  const { language, setLanguage } = React.useContext(LanguageContext);
  strings.setLanguage(language);

  const columns = [
    {
      Header: String(strings.Date).toUpperCase(),
      render: (i: Campaign): React.ReactFragment => (
        <div>
          <p className="rowTopRow">{FormatedDate(new Date(i.createdOn))}</p>
          <p className="rowBottomRow">
            {today < i.createdOn
              ? `${DifferenceInDays(today, i.createdOn)} days ahead`
              : today > i.createdOn && today < i.endDate
              ? `${DifferenceInDays(i.createdOn, today)} days ago`
              : today > i.endDate
              ? `Ended ${DifferenceInDays(i.endDate, today)} days ago`
              : ""}
          </p>
        </div>
      ),
    },
    {
      Header: String(strings.Campaign).toUpperCase(),
      render: (i: Campaign): React.ReactFragment => (
        <div>
          <img width={50} src={logo} className="productLogo" alt="Product logo" />
          <div style={{ marginLeft: "64px" }}>
            <p className="rowTopRow">{i.name}</p>
            <p className="rowBottomRow">{i.region}</p>
          </div>
        </div>
      ),
    },
    {
      Header: String(strings.View).toUpperCase(),
      render: (i: Campaign): React.ReactFragment => (
        <Button className="btnTxt" onClick={() => props.OpenModal("price", i)} variant="link">
          <img width={24} src={Price} className="icon" alt="icon" /> View Pricing
        </Button>
      ),
    },
    {
      Header: String(strings.Actions).toUpperCase(),
      render: (i: Campaign): React.ReactFragment => (
        <>
          <Button className="btnTxt" href={i.csv} variant="link">
            <img width={24} src={file} className="icon" alt="icon" /> CSV
          </Button>
          <Button className="btnTxt" href={i.report} variant="link">
            <img width={24} src={statistics} className="icon" alt="icon" /> Report
          </Button>
          <Button className="btnTxt" onClick={() => props.OpenModal("reschedule", i)} variant="link">
            <img width={24} src={calendar} className="icon" alt="icon" /> Schedule again
          </Button>
        </>
      ),
    },
  ];

  return (
    <table className="table">
      <thead>
        <tr key={0}>
          {columns.map((i, index) => (
            <td key={index}>
              <p className="tabHead">{i.Header}</p>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((i) => (
          <tr key={i.key}>
            {columns.map((o, index) => (
              <td key={index}>{columns[index].render(i)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};