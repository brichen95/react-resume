FROM node:lts as dependencies
WORKDIR /proj
COPY package.json yarn.lock ./
RUN yarn install 

FROM node:lts as builder
WORKDIR /proj
COPY . .
COPY --from=dependencies /proj/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /proj
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /proj/next.config.js ./
COPY --from=builder /proj/public ./public
COPY --from=builder /proj/.next ./.next
COPY --from=builder /proj/node_modules ./node_modules
COPY --from=builder /proj/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]