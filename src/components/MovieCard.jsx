import React from 'react'

const MovieCard = ({ movie: { Title, Year, Poster, Type } }) => {
  return (
    <div className="movie-card">
      {/* Poster */}
      <img
        src={Poster && Poster !== "N/A" ? Poster : '/no-movie.png'}
        alt={Title || 'No Title'}
        className="w-40 h-auto"
      />

      <div className="mt-4 text-white">
        {/* Title */}
        <h3 className="font-bold">{Title || 'No Title'}</h3>

        {/* Type and Year */}
        <div className="content">
          <p>{Type || 'N/A'}</p>
          <span>•</span>
          <p>{Year || 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
