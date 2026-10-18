# Zstore

An Arabic right-to-left clothing storefront with persistent product, order, inventory, and order-tracking flows.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm --filter @workspace/zstore run dev` — run the Zstore storefront
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required environment: `DATABASE_URL` (managed PostgreSQL), Clerk Auth configuration, and `ZSTORE_ADMIN_EMAIL` (the verified owner account email).

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Authentication: Replit-managed Clerk

## Where things live

- `artifacts/zstore/src/` — Arabic RTL storefront, cart, checkout, tracking, and owner dashboard
- `artifacts/api-server/src/routes/` — product, checkout, order tracking, and protected admin API
- `lib/db/src/schema/` — persistent product and order tables
- `lib/api-spec/openapi.yaml` — API source of truth; generated clients and validation are in `lib/api-client-react` and `lib/api-zod`
- `artifacts/zstore/public/images/` — bundled storefront product imagery

## Architecture decisions

- Store prices and fixed delivery fee are in Egyptian pounds; delivery is 80 ج.م.
- Bulk pricing applies when a product variant line contains more than one item.
- Stock is tracked per color and size combination (`variants` on each product). The product's `stock` and `colors`/`sizes` are derived from those variants on save. Checkout locks the product row, reserves stock per combination, and cancelling an order or clearing orders restores it.
- Product photos are resized in the browser and stored as data URLs in the product's `image` field, so the admin can upload from a phone or laptop. The API accepts request bodies up to 8 MB.
- Store administration requires a verified Clerk primary email matching `ZSTORE_ADMIN_EMAIL`; client-side state alone never grants access.
- Customer tracking requires both the order number and the phone number used at checkout.
- Cart contents stay in the browser; products, inventory, and customer orders are stored in PostgreSQL.

## Product

Customers can browse the clothing collection, search products, select variants, manage a cart, place orders, and track deliveries. The owner can manage products, stock, and order fulfillment from a protected dashboard.

## User preferences

The storefront experience is Arabic and right-to-left; the displayed brand wordmark is English: ZSTORE.

## Gotchas

- Set `ZSTORE_ADMIN_EMAIL` before using the owner dashboard. Use the same owner email in Clerk's development and production environments.
- Re-run API code generation after changing `lib/api-spec/openapi.yaml`.
- Products saved before per-variant stock have no variants and cannot be bought until the owner opens them in the dashboard and enters quantities per color and size.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
