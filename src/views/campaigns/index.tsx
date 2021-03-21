import * as React from "react";
import { ICampaignsProps, Campaign, CampaignData } from "./ICampaign";
import { CampaignTable } from "./campaignTable";
import ModalStructure from "../../components/modal";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import { data } from "../../service/serviceAPI";
import { FormatedDate, today, IsNullOrEmpty } from "../../utils/config";
import product from "../../assets/images/80.png";
import LanguageContext from "../../context";
import LocalizedStrings from "react-localization";
import localizations from "../../loc";
let strings = new LocalizedStrings(localizations);

const Campaigns: React.FC<ICampaignsProps> = (props: React.PropsWithChildren<ICampaignsProps>) => {
  const [allItems, setItems] = React.useState<Campaign[]>([]);
  const [campaignData, setcampaignData] = React.useState<CampaignData>({ upcomingItems: [], liveItems: [], pastItems: [] });
  // const [loader, LoaderControl] = React.useState<boolean>(false);
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<string>("");
  const [currentItem, setCurrentItem] = React.useState<Campaign>({} as Campaign);
  const [rescheduleError, setError] = React.useState<string>("");
  const { language, setLanguage } = React.useContext(LanguageContext);
  strings.setLanguage(language);

  const GetData = (datas: Campaign[]) => {
    setItems(datas);
    setcampaignData({ upcomingItems: allItems.filter((i) => i.createdOn > today), liveItems: allItems.filter((i) => i.createdOn < today && i.endDate > today), pastItems: allItems.filter((i) => i.endDate < today) });
  };

  const UpdateData = (datas: Campaign[]) => {
    //divide data into 3 tabs
    setcampaignData({ upcomingItems: datas.filter((i) => i.createdOn > today), liveItems: datas.filter((i) => i.createdOn < today && i.endDate > today), pastItems: datas.filter((i) => i.endDate < today) });
  };

  //TODO: Set up loader control for the application.

  React.useEffect(() => {
    // LoaderControl(true);
    GetData(data);
    UpdateData(data);
    // LoaderControl(false);
  }, []);

  // React.useEffect(() => {
  //   // LoaderControl(true);
  //   UpdateData();
  //   // LoaderControl(false);
  // }, [allItems]);

  const modalViewsviewPricing = ( //modal body for pricing
    <div>
      <div style={{ width: "100%", display: "flex", marginBottom: "30px" }}>
        <img src={product} style={{ float: "left" }} width="137" height="137" className="d-inline-block align-top" alt="product logo" />
        <div className="description">
          <p className="pNme">{currentItem.name}</p>
          <p className="pRgn">{currentItem.region}</p>
        </div>
      </div>
      <div>
        <p className="pricing">{strings.Pricing}</p>
        {!IsNullOrEmpty(currentItem.price) &&
          currentItem.price.map((pr, index) => (
            <p className="pricingI" key={index}>
              {pr.Duration} <span className="pricingS">${pr.Price}</span>
            </p>
          ))}
      </div>
    </div>
  );
  const modalViewsreschedule = ( //modal body for rescheduling
    <div>
      <div style={{ width: "100%", display: "flex", marginBottom: "30px" }}>
        <img src={product} style={{ float: "left" }} width="137" height="137" className="d-inline-block align-top" alt="product logo" />
        <div className="description">
          <p className="pNme">{currentItem.name}</p>
          <p className="pRgn">{currentItem.region}</p>
        </div>
      </div>
      <div>
        <p className="pricing">{strings.Reschedule}</p>
        <p className="pricingI">
          {strings.CreatedOn} <span className="pricingS">{FormatedDate(new Date(currentItem.createdOn))} </span>
        </p>
        <Form.Control id="rescheduleControl" name="rescheduleControl" type="date" placeholder="Select Date" />
        <Form.Text className="text-muted">{rescheduleError}</Form.Text>
      </div>
    </div>
  );

  const submit = () => {
    setError("");
    const control = document.querySelector("#rescheduleControl") as HTMLInputElement;
    if (isNaN(new Date(control.value).getTime())) setError("Please enter valid date.");
    else {
      let dd: Campaign[] = allItems;
      dd = dd.map((i) => {
        if (i.key === currentItem.key) {
          i.endDate = i.endDate - i.createdOn + new Date(control.value).valueOf();
          i.createdOn = new Date(control.value).valueOf();
          return i;
        } else return i;
      });
      try {
        //serviceAPI.saveItem()
        //TODO: Build serviceAPI methods.
        setItems(dd);
        UpdateData(dd);
        setModal("");
        setModalShow(false);
        setError("");
        setCurrentItem({} as Campaign);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container fluid="md">
      <p className="header">{strings.ManageCampaigns}</p>

      <Tabs defaultActiveKey="upcoming" id="campaignTableTabs" unmountOnExit={true}>
        <Tab tabClassName="tabs" key="upcoming" eventKey="upcoming" title={strings.UpcomingCampaigns}>
          <CampaignTable
            data={campaignData.upcomingItems}
            OpenModal={(modal: string, item: Campaign) => {
              setCurrentItem(item);
              setModal(modal);
              setModalShow(true);
              setError("");
            }}
            CloseModal={() => {
              setModal("");
              setModalShow(false);
              setError("");
              setCurrentItem({} as Campaign);
            }}
          />
        </Tab>
        <Tab tabClassName="tabs" key="live" eventKey="live" title={strings.LiveCampaigns}>
          <CampaignTable
            data={campaignData.liveItems}
            OpenModal={(modal: string, item: Campaign) => {
              setCurrentItem(item);
              setModal(modal);
              setModalShow(true);
              setError("");
            }}
            CloseModal={() => {
              setModal("");
              setModalShow(false);
              setError("");
              setCurrentItem({} as Campaign);
            }}
          />
        </Tab>
        <Tab tabClassName="tabs" key="past" eventKey="past" title={strings.PastCampaigns}>
          <CampaignTable
            data={campaignData.pastItems}
            OpenModal={(modal: string, item: Campaign) => {
              setCurrentItem(item);
              setModal(modal);
              setModalShow(true);
              setError("");
            }}
            CloseModal={() => {
              setModal("");
              setModalShow(false);
              setError("");
              setCurrentItem({} as Campaign);
            }}
          />
        </Tab>
      </Tabs>
      <ModalStructure
        show={modalShow}
        // headertext={modal == "price" ? modalHeadersviewPricing : modal == "reschedule" ? modalHeadersreschedule : ""}
        modalbody={modal == "price" ? modalViewsviewPricing : modal == "reschedule" ? modalViewsreschedule : <></>}
        onSubmit={modal == "reschedule" ? submit : null}
        onCancel={() => {
          setModal("");
          setModalShow(false);
          setError("");
        }}
      />
    </Container>
  );
};

export default Campaigns;
