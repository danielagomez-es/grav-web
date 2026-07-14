# danielagomez.es

A small, gallery-first Grav site for a personal escort portfolio.

## Run with Docker Compose or Dockge

The Compose file deliberately uses relative paths, so the whole directory can be added as one Dockge stack.

```sh
cp .env.example .env
docker compose up -d
```

Open `http://localhost:8080/` (or the host and port configured in `.env`). On first start, the official Grav image installs Grav into `site/` and preserves the starter content already provided there. Visit `/admin` to create the administrator account.

In Dockge:

1. Add the directory containing this `docker-compose.yml` as a stack.
2. Start or recreate the stack.
3. Use Dockge's logs if the first-run Grav download or permissions need attention.

## Replacing the placeholders

- Replace the six `placeholder-*.svg` files in `site/user/pages/01.home/` with your own optimized images, or edit the `gallery` entries in `default.md` to point at different filenames.
- Replace the wording and the placeholder `hello@example.com` address in the page files under `site/user/pages/`.
- Change colours and layout in `site/user/themes/transfolio/css/transfolio.css`.

The theme uses only local CSS, JavaScript, and images: there are no remote fonts, analytics, or third-party embeds in the starter site.

## Updating

Back up `site/` before updates, then pull and recreate the image:

```sh
docker compose pull
docker compose up -d
```

Keep `site/user/accounts/` and other runtime directories out of version control. Before publishing real photographs, strip EXIF/GPS metadata, confirm consent and usage rights, and use HTTPS through the reverse proxy that fronts this stack.
