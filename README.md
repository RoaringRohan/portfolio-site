
## Local development
1. Clone or download this repo and open the project folder in your terminal.
2. Make sure [Node.js](https://nodejs.org/) and npm are installed.
3. Install dependencies:

   ```bash
   npm install
   ```

4. (Optional) Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials if you want the contact form to work:

   ```bash
   cp .env.example .env
   ```

5. Start the dev server:

   ```bash
   npm run dev
   ```

   The app runs at [http://localhost:5173](http://localhost:5173) by default (`npm start` does the same thing).

## Production build

1. Install dependencies (`npm install`) if you have not already.
2. Build the static site:

   ```bash
   npm run build
   ```

   Output is written to the `build/` folder (configured in `vite.config.js`).

3. Serve the `build/` folder with any static file host, or preview it locally:

   ```bash
   npm run preview
   ```

## Docker

The included `Dockerfile` builds the app and serves it with nginx.

1. Make sure Docker is installed.
2. Build the image:

   ```bash
   docker build -t personal-portfolio:nginx -f Dockerfile .
   ```

3. Run the container:

   ```bash
   docker run -p 8081:80 personal-portfolio:nginx
   ```

   The site will be available at [http://localhost:8081](http://localhost:8081).

**Optional — custom Docker network:** To host on a personal server, you can segment containers onto their own network (IPVLAN, MACVLAN, etc.) and assign that network when running the container:

```bash
docker run -itd --network NETWORK_NAME -p 8081:80 --name CONTAINER_NAME personal-portfolio:nginx
```
