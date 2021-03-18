import styled from "styled-components/native";

export const Container = styled.ScrollView`
    display: flex;
    margin-top: 20px;
`;

export const ImageBackground = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Title = styled.Text`
    font-size: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 29%;
    margin-bottom: 15px;
`;

export const ViewAnimalsAction = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

export const ButtonAction = styled.TouchableOpacity`
    width: 45%;
    height: 250px;
    border: 1px solid lightgray;
    box-shadow: 5px 5px 2px lightgray;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const ImageAnimals = styled.Image`
    width: 170px;
    height: 180px;
    z-index: 1;
`;
export const ImageBackgroundAnimals = styled.Image`
    width: 170px;
    height: 180px;
    position: absolute;
    top: 5%;
    right: 5%;
    transform: scale(10);
    opacity: 0.5;
`;
export const TextAnimalName = styled.Text`
    font-size: 10%;
    display: flex;
    justify-content: center;
    margin-top: 5px;
`;
