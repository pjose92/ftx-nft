# FTX Sample Project

Thanks for your interest in FTX!

This sample project is meant for us to get a sense of your programming style, but also give you a taste of what the FTX development process is like.

During development at FTX, for some projects you may be handed designs and others you're asked to get creative. This project will be the latter :)
Don't feel the need to obsess over the UI/UX, but try to give it a nice touch. Please use React for web and React Native for mobile. An app template generator
such as `create-react-app` or `create-reat-native-app` is a good place to start. Implementations will be accepted in either TypeScript or Javascript.

Show us what you can do by building a website or mobile app to display NFTs on the FTX US platform! Some requirements to guide you:
- User should be able to browse a paginated list of collections
- User should be able to browse individual NFTs within a collection (also paginated)
- Feel free to ignore any videos and only display images

What we're looking for:

- Comprehensive knowledge of React/React Native
- Thoughtful design
- Good state management
- Code maintainability

You may run into CORs errors when developing. Please use https://www.npmjs.com/package/local-cors-proxy or something similar so that our team may easily stand up the project. Or provide a link to running example.

For any other questions, please reach out to taylor@ftx.com.

## API Endpoints

**See `Models` below for corresponding types in `Response`**

#### Get NFT collections

GET https://ftx.us/api/nft/collections_page

| Parameters |         type      |      description  |
| ---------- | ----------------- | ----------------- |
| startInclusive   | number |          item offset (i.e. 0)         |
| endExclusive      | number            | startInclusive + amount per page (i.e. 25) |
| collectionType      | 'all', 'ftx', 'sol', 'eth'    | types of NFT collections to show |

`Response`
```
{
  result: {
    group_type: string;
    group_id: string;
    total: number;
    volume: number;
    first_nft: NFT;
    issuer: NFTIssuer;
    collectionDict?: NFTCollectionDict;
  }
}
```

#### Get NFTs
GET https://ftx.us/api/nft/nfts_filtered

| Parameters |       type        |      description  |
| ---------- | ----------------- | ----------------- |
| startInclusive   | number |          item offset (i.e. 0)         |
| endExclusive      | number            | startInclusive + amount per page (i.e. 25) |
| nft_filter_string      | "{ "collection": "COLLECTION_NAME" }"    | stringified JSON on how to filter NFTs |

`Response`
```
{
  result: {
    count: number;
    nfts: NFT[];
  }
}
```````

`Models`

```
type NFTIssuer = {
  id: number;
  time: string;
  status: string;
  issuer: string;
  isVerified: boolean;
  mintSource: string;
  createdAt: number;
};

type NFTCollectionDict = {
  name: string;
  twitterUrl: string | null;
  discordUrl: string | null;
  homepageUrl: string | null;
  description: string | null;
  createdAt: number;
  bannerImageUrl: string | null;
  bannerImageId: number | null;
  avatarImageUrl: string | null;
  avatarImageId: number | null;
  cardImageUrl: string | null;
  cardImageId: number | null;
};

type NFTAuction = {
  bestBid: number | null;
  minNextBid: number;
  endTime: string;
  bids: number;
  quoteCurrency: string;
};

type NFT = {
  id: string;
  name: string;
  description: string | null;
  issuer: string;
  collection: string;
  series: string;
  solMintAddress: string | null;
  ethContractAddress: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  animationUrl: string | null;
  thumbnailUrl: string | null;
  attributes: Record<string, string> | null;
  redeemable: boolean;
  redeemed: boolean;
  offerPrice: number | null;
  auction: NFTAuction | null;
  depositMethods?: string[];
  withdrawalMethods?: string[];
  auctionReservationPrice?: number;
  owned?: boolean;
  bid?: number | null;
  buyFee?: number | null;
  isBestBid?: boolean;
  quoteCurrency: string;
  featured?: boolean;
  created_at?: string;
  hidden?: boolean | undefined;
};
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
