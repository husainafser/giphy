# Giphy Clone

A clone of the popular Giphy platform, built using React. This app provides GIFs and stickers across different categories, allowing users to explore and search for their favorite animations.

## Features

- Browse GIFs and stickers
- Search for GIFs and stickers by keyword
- Explore different categories like trending, reactions, emotions, etc.
- Store Favourites GIFs.
- Responsive design for both desktop and mobile views

## Demo

https://giphy.kellysolutions.in/

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/husainafser/giphy.git
   cd giphy-clone
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file at the root of your project and add your Giphy API key:

   ```bash
   REACT_APP_GIPHY_API_KEY=your_giphy_api_key
   ```

   Get your API key from [Giphy Developers](https://developers.giphy.com/).

4. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Giphy API**: Provides GIFs and stickers from Giphy's library.
- **Tailwind CSS**: For styling the components.

## Usage

1. Browse GIFs and stickers by category.
2. Use the search bar to find specific GIFs or stickers.
3. Click on a GIF or sticker to view it in full size.

## Future Improvements

- User authentication for saving favorite GIFs/stickers.
- Infinite scrolling for search results.
- Dark mode toggle.

## Contributing

If you'd like to contribute to this project, please follow the steps below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
