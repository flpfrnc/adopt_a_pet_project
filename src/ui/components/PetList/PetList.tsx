import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import {
  StyledList,
  ItemList,
  Picture,
  InfoContainer,
  PetName,
  Description,
} from "./PetList.style";
import { TextService } from '../../../data/services/TextService'


interface ListProps {
  pets: Pet[];
}

const PetList = (props: ListProps) => {
  const maxTextLength = 200;
  
  return (
    <StyledList>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Picture
            src={
              pet.picture
            }
          />
          <InfoContainer>
            <PetName>{pet.name}</PetName>
            <Description>
             {TextService.limitText(pet.story, maxTextLength)}
            </Description>
            <Button fullWidth variant={"contained"}>
              Adotar
            </Button>
          </InfoContainer>
        </ItemList>
      ))}
    </StyledList>
  );
};

export default PetList;
