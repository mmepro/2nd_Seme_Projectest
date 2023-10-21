// import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const ImageInfo = styled.div`
    border-radius: 10px;
    display: flex;
    height: 450px;
`;

const ImageContainer = styled.div`

`;

const OverviewContainer = styled.div`
    width: 300px;
    text-align: left;
    margin-left: 20px;
    margin-right: 30px;
`;

function Movie({poster_path, title, overview, genre_ids}) {
    return (
        <ImageInfo>
            <ImageContainer>
                <img style={{borderRadius:'10px'}} src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title}/>
            </ImageContainer>
            <OverviewContainer>
                <h2>제목 : {title}</h2>
                <p>줄거리 : {overview}</p>
                {/* <ul>{genre_ids.map((genre) => (<li key={genre}>{genre}</li>))}</ul> */}
            </OverviewContainer>
        </ImageInfo>
    );
}
Movie.propTypes ={
    poster_path : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired,
    genre_ids : PropTypes.arrayOf(PropTypes.number).isRequired
}
export default Movie;

