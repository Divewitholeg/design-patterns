// import { RegularList } from "./RegularList";
//import { SplitScreen } from "./SplitScreen";
// import { SmallPersonListItem } from "./people/SmallPersonListItem";
// import { LargePersonListItem } from "./people/LargePersonListItem";
// import { NumberedList } from "./NumberedList";
// import { SmallProductListItem } from "./products/SmallProductListItem";
// import { LargeProductListItem } from "./products/LargeProductListItem";
// import { Modal } from "./Modal";
// import { CurrentUserLoader } from "./CurrentUserLoader";
// import { UserLoader } from "./UserLoader";
// import { ResourceLoader } from "./ResourceLoader";
// import { DataSource } from "./DataSource";
// import { ProductInfo } from "./ProductInfo";
// import { UserInfo } from "./UserInfo";
// import { UncontrolledForm } from "./UncontrolledForm";
// import { ControlledForm } from "./ControlledForm";
// import { useState } from "react";
// import { ControlledModal } from "./ControlledModal";
// import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
// import { useState } from "react";
// import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
// import { printProps } from "./printProps";
// import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";

// const LeftHandSide = ({ name }) => {
//   return <div style={{ backgroundColor: "fuchsia" }}>{name}</div>;
// };

// const RightHandSide = ({ message }) => {
//   return <div style={{ backgroundColor: "teal" }}>{message}</div>;
// };

// const people = [
//   {
//     name: "John Doe",
//     age: 54,
//     hairColor: "brown",
//     hobbies: ["swimming", "bicycling", "video games"],
//   },
//   {
//     name: "Brenda Smith",
//     age: 33,
//     hairColor: "black",
//     hobbies: ["golf", "mathematics"],
//   },
//   {
//     name: "Jane Garcia",
//     age: 27,
//     hairColor: "blonde",
//     hobbies: ["biology", "medicine", "gymnastics"],
//   },
// ];

// const products = [
//   {
//     name: "Flat-Screen TV",
//     price: "$300",
//     description: "Huge LCD screen, a great deal",
//     rating: 4.5,
//   },
//   {
//     name: "Basketball",
//     price: "$10",
//     description: "Just like the pros use",
//     rating: 3.8,
//   },
//   {
//     name: "Running Shoes",
//     price: "$120",
//     description: "State-of-the-art technology for optimum running",
//     rating: 4.2,
//   },
// ];
// const StepOne = ({ goToNext }) => (
//   <>
//     <h1>Step 1</h1>
//     <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
//   </>
// );
// const StepTwo = ({ goToNext }) => (
//   <>
//     <h1>Step 2</h1>
//     <button onClick={() => goToNext({ age: 100 })}>Next</button>
//   </>
// );
// const StepThree = ({ goToNext }) => (
//   <>
//     <h1>Step 3</h1>
//     <p>Congratulations! You qualify for our senior discount</p>
//     <button onClick={() => goToNext({})}>Next</button>
//   </>
// );
// const StepFour = ({ goToNext }) => (
//   <>
//     <h1>Step 4</h1>
//     <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
//   </>
// );
// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, "123");

function App() {
  // const [onboardingData, setOnboardingData] = useState({});
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const onNext = (stepData) => {
  //   setOnboardingData({ ...onboardingData, ...stepData });
  //   setCurrentIndex(currentIndex + 1);
  // };
  // const getServerData = (url) => async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // };

  // const getLocalStorageData = (key) => () => {
  //   return localStorage.getItem(key);
  // };

  // const Text = ({ message }) => <h1>{message}</h1>;
  // const [shouldShowModal, setShouldShowModal] = useState(false);
  // const StepOne = ({ goToNext }) => (
  //   <>
  //     <h1>Step 1</h1>
  //     <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  //   </>
  // );
  // const StepTwo = ({ goToNext }) => (
  //   <>
  //     <h1>Step 2</h1>
  //     <button onClick={() => goToNext({ age: 100 })}>Next</button>
  //   </>
  // );
  // const StepThree = ({ goToNext }) => (
  //   <>
  //     <h1>Step 3</h1>
  //     <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  //   </>
  // );

  return (
    <>
      {/* //{" "}
      <SplitScreen leftWeight={1} rightWeight={3}>
        // <LeftHandSide name={"Oleg"} />
        // <RightHandSide message={"Hi from the right!"} />
        //{" "}
      </SplitScreen> */}
      {/* <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={products}
        resourceName={"product"}
        itemComponent={SmallProductListItem}
      /> */}
      {/* <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal> */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      {/* <UserLoader userId={"123"}>
        <UserInfo />
      </UserLoader> */}
      {/* <ResourceLoader resourceURL="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
      <ResourceLoader resourceURL="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader> */}
      {/* <DataSource
        getDataFunc={getServerData("/products/1234")}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hi from the modal!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button> */}
      {/* <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}
      {/* <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow> */}
      {/* <UserInfoWrapped a={1} b={2} c={3} /> */}
      {/* <UserInfoWithLoader /> */}
      <UserInfoForm />
    </>
  );
}

export default App;
