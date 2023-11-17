export default function MovieDetailsModal({ movie, onClose }) {
    if (!movie) return null;
  
    // Modal overlay styling
    const overlayStyle = {
      position: 'fixed', // Fixed position to cover the whole screen
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
      display: 'flex',
      alignItems: 'center', // Center the modal vertically
      justifyContent: 'center', // Center the modal horizontally
      zIndex: 1050, // High z-index to ensure it's above other elements
    };
  
    // Modal content styling
    const contentStyle = {
      backgroundColor: '#1C1E2C', // White background
      padding: '20px',
      borderRadius: '8px', // Rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // A subtle shadow
      minWidth: '300px', // Minimum width
      maxWidth: '600px', // Maximum width
      margin: '0 20px', // Margin for small screens
      textAlign: 'center', // Center the text
      color: '#FFF', // Dark text color
      fontFamily: 'Inter',

    };
  
    // Image styling
    const imageStyle = {
      maxWidth: '30%', // Ensure the image is not bigger than the modal
      height: 'auto', // Keep the aspect ratio
    };

     // Updated style for the synopsis section
  const synopsisStyle = {
    textAlign: 'left', // Align text to the left
    marginTop: '10px', // Margin at the top
    maxHeight: '150px', // Maximum height for the synopsis section
    overflowY: 'auto', // Show a scrollbar when the content overflows
    padding: '10px', // Padding inside the scrollable area
    borderRadius: '5px', // Optional: for rounded corners inside the scrollable area
    backgroundColor: '#2A2F42', // Optional: different background color for synopsis
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)', // Optional: subtle inner shadow
    color: '#FFF', // Optional: text color
    marginBottom: '10px', // Optional: space at the bottom
    fontFamily: 'Inter',
  };

  
    return (
        <div style={overlayStyle}>
          <div style={contentStyle}>
            <h3>{movie.title}</h3>
            {movie.posterUrl && <img src={movie.posterUrl} alt={movie.title} style={imageStyle} />}
            <p>평점 : {movie.vote_average}</p>
            {/* Display the synopsis */}
            {movie.synopsis && (
              <div style={synopsisStyle}>
                <h4>줄거리 :</h4>
                <p>{movie.synopsis}</p>
              </div>
            )}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );
    };
  