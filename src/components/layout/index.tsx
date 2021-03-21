import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Languages } from "../../assets/localization/language";
import logo from "../../assets/images/logo.png";
import LanguageContext from "../../context";
export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props: React.PropsWithChildren<ILayoutProps>) => {
  const { language, setLanguage } = React.useContext(LanguageContext);
  return (
    <>
      <Navbar bg="darknav">
        <Container>
          <Navbar.Brand>
            <img src={logo} width="147" height="45" className="d-inline-block align-top" alt="Bluestack logo" />
          </Navbar.Brand>
          <Form inline>
            <DropdownButton id="dropdown-basic-button" variant="" menuAlign="right" className="localization" title="Locale">
              {Languages.map((l) => (
                <Dropdown.Item key={l.key} active={language === l.key} onSelect={(eventKey: any, event: Object) => setLanguage(l.key)}>
                  {l.text}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Form>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
};

export default Layout;
