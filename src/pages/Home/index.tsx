import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { Container } from "./styled";
import theme from "../../styles/theme";

import { SearchBar, Toggle, Text, Button, Input, Image, Card, List, Header, Footer } from "../../components";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [toggleOn, setToggleOn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleAlert = () => {
    toast('Uma alerta pra você!', {
      toastId: `ID-info-light`,
      type: 'error',
      position: 'top-right',
      autoClose: 5000,
      theme: 'dark',
    })
  }

  return (
    <Container data-testid="home-screen">
      <Header
        name={`header-home`}
        attributes={{
          onClick: () => window.location.reload(),
          logoPath: 'assets/img/logo.svg',
          styleProps: {
            headerComponent: {},
            imageHeader: {},
            imageComponent: {},
          }
        }}
      />

      <Text
        name={"title-home"}
        attributes={{
          text: "React Default Project",
          styleProps: {
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.xxlarge,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
      <SearchBar
        name={"search-bar"}
        attributes={{
          searchValue: searchValue,
          setSearchValue: setSearchValue,
          styleProps: {
            containerComponent: {},
            labelComponent: {
              marginTop: '0',
            },
            inputArea: {
              width: '65%',
            },
            inputComponent: {
              width: '65%',
            }
          }
        }}
      />

      <Toggle
        name={"toggle"}
        attributes={{
          textOff: 'Off',
          textOn: 'On',
          toggleOn: toggleOn,
          setToggleOn: setToggleOn,
          styleProps: {
            toggleContainer: {},
            toggleSwitch: {},
            toggleInput: {},
            toggleSlider: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />

      <Button
        name={`button-home`}
        attributes={{
          text: 'Enviar',
          onClick: handleAlert,
          styleProps: {
            type: 'normal',
            buttonComponent: {
              marginTop: '20px',
            },
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.medium,
              fontWeight: theme.font.bold,
              color: theme.colors.white,
            }
          }
        }}
      />

      <Input
        name={`input-home`}
        attributes={{
          setInputValue: setInputValue,
          value: inputValue,
          placeholder: "Digite seu nome...",
          required: true,
          label: "Nome:",
          styleProps: {
            labelComponent: {
              alignItems: 'flex-start',
              width: '45%',
            },
            inputArea: {},
            inputComponent: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
              margin: 'none',
            }
          }
        }}
      />

      <List
        name={`list-home`}
        attributes={{}}
      >
        <>
          {Array.from({ length: 8 }, (element, index: number) => {
            return (
              <Card
                key={index}
                name={`card-home`}
                attributes={{
                  styleProps: {
                    hasHover: true,
                    cardComponent: {},
                    imageCard: {},
                  }
                }}
              >
                <>
                  <Image
                    name={`image-card`}
                    attributes={{
                      src: 'assets/img/logo.svg',
                      styleProps: {
                        hasHover: false,
                        imageComponent: {}
                      }
                    }}
                  />

                  <Text
                    name={"text-card"}
                    attributes={{
                      text: "React Default Project",
                      styleProps: {
                        textComponent: {
                          fontFamily: theme.font.fontFamily,
                          fontSize: theme.font.size.small,
                          fontWeight: theme.font.bold,
                          color: theme.colors.black,
                        }
                      }
                    }}
                  />
                </>
              </Card>
            )
          })}
        </>
      </List>

      <Card
        name={`card-home`}
        attributes={{
          styleProps: {
            hasHover: true,
            cardComponent: {
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              width: '60%',
              marginBottom: '30px',
              position: 'relative',
            },
            imageCard: {
              width: '40%',
              height: '100%',
              borderTopRightRadius: '0',
              borderBottomLeftRadius: '20px'
            },
          }
        }}
      >
        <>
          <Button
            name={`card-home-button`}
            attributes={{
              icon: FaArrowLeft,
              styleProps: {
                type: 'circle',
                buttonComponent: {
                  position: 'absolute',
                  left: '-10px',
                  top: '10px',
                }
              }
            }}
          />

          <Image
            name={`image-card`}
            attributes={{
              src: 'assets/img/logo.svg',
              styleProps: {
                hasHover: false,
                imageComponent: {}
              }
            }}
          />

          <Text
            name={"text-card"}
            attributes={{
              text: "React Default Project",
              styleProps: {
                textComponent: {
                  fontFamily: theme.font.fontFamily,
                  fontSize: theme.font.size.small,
                  fontWeight: theme.font.bold,
                  color: theme.colors.black,
                  margin: '30px'
                }
              }
            }}
          />
        </>
      </Card>

      <Footer
        name="footer-home"
        attributes={{
          text: process.env.REACT_APP_AUTHOR || 'Victor Jhepherson',
          styleProps: {
            footerComponent: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
    </Container>
  );
}
