import React from "react";
import { CardContent, TypesContent } from "./styled";
import theme from "../../../styles/theme";

import { IPokemonCardProps } from "../../../interfaces";

import { Card, Image, Text } from "../../";

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attributes }) => {
  const { onClick, pokemon, styleProps } = attributes;

  const getType = (): string => {
    const type = pokemon.types[0].type.name;

    return type;
  }

  return (
    <>
      <Card
        name={name}
        attributes={{
          styleProps: {
            hasHover: true,
            cardComponent: {
              position: 'relative',
            },
            imageCard: {
              backgroundColor: theme.typeColors[getType()].background,
            },
          }
        }}
      >
        <>
          <Text
            name={"text-id"}
            attributes={{
              text: `#${("0000" + pokemon.id).slice(-4)}`,
              styleProps: {
                textComponent: {
                  fontFamily: theme.font.fontFamily,
                  fontSize: theme.font.size.medium,
                  fontWeight: theme.font.bold,
                  color: theme.colors.black,
                  position: 'absolute',
                  right: '90px',
                  top: '10px',
                }
              }
            }}
          />

          <div className={`image-container`}>
            <Image
              name={`image-card`}
              attributes={{
                src: pokemon.sprites.front_default,
                styleProps: {
                  hasHover: false,
                  imageComponent: {
                    width: '250px',
                    height: '250px',
                  }
                }
              }}
            />
          </div>

          <CardContent>
            <Text
              name={"text-card"}
              attributes={{
                text: pokemon.name,
                styleProps: {
                  textComponent: {
                    fontFamily: theme.font.fontFamily,
                    fontSize: theme.font.size.medium,
                    fontWeight: theme.font.bold,
                    color: theme.colors.black,
                  }
                }
              }}
            />

            <TypesContent>
              {pokemon.types.map((type, index: number) => {
                return (
                  <Text
                    key={index}
                    name={`types-pokemon`}
                    attributes={{
                      text: type.type.name,
                      styleProps: {
                        textComponent: {
                          fontFamily: theme.font.fontFamily,
                          fontSize: theme.font.size.small,
                          fontWeight: theme.font.bold,
                          color: theme.typeColors[type.type.name].border,
                          backgroundColor: theme.typeColors[type.type.name].background,
                          width: '110px',
                        }
                      }
                    }}
                  />
                )
              })}
            </TypesContent>
          </CardContent>
        </>
      </Card>
    </>
  )
}

export default PokemonCard;
