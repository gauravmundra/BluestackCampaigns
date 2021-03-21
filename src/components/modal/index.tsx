import * as React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LanguageContext from "../../context";
import LocalizedStrings from "react-localization";
import localizations from "../../loc";
let strings = new LocalizedStrings(localizations);

export interface IModalProps {
  show: boolean;
  modalbody: any;
  onCancel: Function;
  onSubmit?: any;
  //   headertext?: string;
}

const ModalStructure: React.FunctionComponent<IModalProps> = (props: React.PropsWithChildren<IModalProps>) => {
  const { language, setLanguage } = React.useContext(LanguageContext);
  strings.setLanguage(language);
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* {props.headertext && (
        <Modal.Header>
          <Modal.Title>{props.headertext}</Modal.Title>
        </Modal.Header>
      )} */}
      <Modal.Body>{props.modalbody}</Modal.Body>
      <Modal.Footer>
        {props.onSubmit && (
          <Button className="btnns" variant="outline-primary" onClick={() => props.onSubmit()}>
            {strings.Submit}
          </Button>
        )}
        <Button className="btnn" variant="outline-dark" onClick={() => props.onCancel()}>
          {strings.Close}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalStructure;
