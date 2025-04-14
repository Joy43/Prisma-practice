

```markdown
# Prisma CLI Commands Guide

This guide provides a quick reference to commonly used Prisma CLI commands for working with your database and Prisma schema.

## 📦 Migrations & Generation

```bash
# Create a new migration and apply it to the database
npx prisma migrate dev
```

```bash
# Generate Prisma Client from the Prisma schema (no migration)
npx prisma generate
```

## ✅ Schema Validation

```bash
# Validate the Prisma schema for correctness
npx prisma validate
```

## 🧹 Format Prisma Schema

```bash
# Format the Prisma schema file
npx prisma format
```

## 🔄 Database Pull

```bash
# Preview the result of pulling the database schema (without saving)
npx prisma db pull --print
```

```bash
# Pull the schema from an existing database (useful for existing projects)
npx prisma db pull
```

## 🚀 Push Schema to Database

```bash
# Push your Prisma schema to the database (without generating migration files)
npx prisma db push
```

## 🎯 Prisma Studio & CLI Interface

```bash
# Launch Prisma's interactive web UI to explore your database
npx prisma studio
```

```bash
# Display all available Prisma CLI commands
npx prisma
```
```

Let me know if you want me to add an overview section or link it to docs/tutorials as well!