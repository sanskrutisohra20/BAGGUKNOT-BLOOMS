# Baggu Knot & Bloom

A responsive static storefront built with HTML, CSS and JavaScript. It is designed for GitHub Pages and includes a product grid, category filters, a basket and WhatsApp order-message generation.

## Files
- `index.html` — website structure
- `style.css` — pastel pink and cream styling
- `script.js` — sample products, basket and WhatsApp ordering

## Before publishing
1. Open `script.js`.
2. Replace `91XXXXXXXXXX` in `WHATSAPP_NUMBER` with your WhatsApp number, including India's country code `91`, with no plus sign or spaces. Example format: `919876543210`.
3. Update the sample product names, prices, descriptions and emojis in the `products` array.
4. Optionally add your Instagram URL to `INSTAGRAM_URL`.
5. Save and test `index.html` in your browser.

## Publish with GitHub Pages
1. Put `index.html`, `style.css`, `script.js` and this README in the root of a **public** GitHub repository.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then click **Save**.
5. Wait for deployment and open the URL shown on the Pages screen.

## Important notes
- This is a static website suitable for GitHub Pages. GitHub Pages does not run Node.js, `server.js`, or a backend.
- The WhatsApp button creates an order message. It does not automatically collect payment or confirm an order.
- Do not put API keys, Razorpay secrets, passwords, `.env` files or customer private data in a public repository.
- To accept online payments, integrate a payment provider using its hosted checkout and a secure backend hosted separately. Do not put secret keys in browser JavaScript.
- Replace the sample product content and add your own product photographs before sharing the website with customers.
