import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import { Post } from "../generated/graphql";

const fakePosts: Post[] = [
  {
    title: "React 18 Alpha is out! Now what?",
    id: "721780",
    readableDate: "Jun 8",
    commentsLink:
      "https://dev.to/cassidoo/react-18-alpha-is-out-now-what-2apj#comments",
    originalLink: "https://dev.to/cassidoo/react-18-alpha-is-out-now-what-2apj",
    reactionsCount: 466,
    author: {
      name: "Cassidy Williams",
      avatarURL:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--P4HnHvGk--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/6401/db5b0ab6-93a1-4168-9f97-af8d363c1153.png",
    },
    description:
      "Hello!  They kept us in Suspense long enough, but HECK React developers have some new features to...",
    body: "[Not available]",
  },
  {
    title: "What was your win this week?",
    id: "710585",
    readableDate: "May 28",
    commentsLink:
      "https://dev.to/devteam/what-was-your-win-this-week-2ei4#comments",
    originalLink: "https://dev.to/devteam/what-was-your-win-this-week-2ei4",
    reactionsCount: 38,
    author: {
      name: "Gracie Gregory (she/her)",
      avatarURL:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--YTDghB6M--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/342975/98b7a8ed-aa91-48a3-bcc0-ebe2c13b5893.png",
    },
    description:
      "Got to all your meetings on time? Started a new project? Fixed a tricky bug?",
    body: "[Not available]",
  },
];

const HomeScreen: React.FC = () => {
  return (
    <>
      <Navigation title="Devboard" />
      <PostPreviewList
        posts={fakePosts}
        onFetchMore={() => console.log("fetch more!")}
        onRefresh={() => console.log("refresh!")}
      />
    </>
  );
};

export default HomeScreen;
