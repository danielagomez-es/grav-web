# danielagomez.es

A small, gallery-first Ghost site for a personal escort portfolio.

## Run with Docker Compose or Dockge

The Compose file deliberately uses relative paths, so the whole directory can be added as one Dockge stack.

```sh
cp .env.example .env
# Edit .env and set unique database passwords first.
docker compose up -d
```

Open `http://localhost:8080/` locally, or the public URL configured in `GHOST_URL`. Complete the first-run setup at `/ghost/`.

In Dockge:

1. Add the directory containing this `docker-compose.yml` as a stack.
2. Start or recreate the stack.
3. Use Dockge's logs if Ghost or MySQL need attention during first start.

The Compose file uses the official Ghost image, a named Ghost content volume, and a named MySQL volume. On startup, the authored theme and routes from `ghost/content/` are copied into that volume; this keeps uploads and Ghost state persistent while avoiding bind-mount ownership problems on Dockge hosts. Traefik routes HTTPS traffic to Ghost's internal port `2368`.

## Activate the theme

After completing Ghost setup, go to **Settings → Design** and activate the installed `transfolio` theme. Add navigation links for `/`, `/about/`, `/journal/`, and `/contact/`.

The homepage displays six abstract placeholders until you publish posts with the tag `gallery`. To replace them with real photographs, create published Ghost posts tagged `gallery` and set a featured image on each. The six SVG assets are also available in `ghost/content/themes/transfolio/assets/images/` for easy replacement.

Create Ghost pages with the slugs `about`, `contact`, and `privacy`; the theme provides the matching page layout. Set the site title, description, cover image, and professional contact details in Ghost Admin.

Change colours and layout in `ghost/content/themes/transfolio/assets/css/screen.css`.

The theme uses only local CSS, JavaScript, and images: there are no remote fonts, analytics, or third-party embeds in the starter site.

## Updating

Back up the `danielagomez_ghost_content` and `danielagomez_ghost_db_data` Docker volumes before updates, then pull and recreate the images:

```sh
docker compose pull
docker compose up -d
```

Before publishing real photographs, strip EXIF/GPS metadata, confirm consent and usage rights, and keep the site behind HTTPS through Traefik. Configure transactional SMTP in Ghost so password recovery and admin notifications work reliably.
