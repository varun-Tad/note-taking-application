import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { TfiViewList } from "react-icons/tfi";
import { sideBarData } from "../Data/SidebarData";
import { BsFillPinFill, BsThreeDotsVertical } from "react-icons/bs";
import { useHomePage } from "../Contexts/HomepageContext";

export const Homepage = () => {
  const { state, dispatch } = useHomePage();

  const [displaySideBar, setDisplaySideBar] = useState<boolean>(false);
  const [inputFocusToggle, setInputFocusToggle] = useState<boolean>(true);
  const [moreToggle, setMoreToggle] = useState<boolean>(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const sideBarHandler = () => {
    setDisplaySideBar(!displaySideBar);
  };

  const inputFocusHandler = () => {
    setInputFocusToggle(!inputFocusToggle);
  };

  const moreBtnHandler = () => {
    setMoreToggle(!moreToggle);
  };

  const titleChangeHandler = (titleVal: string) => {
    setTitle(titleVal);
  };

  const noteContentChangeHandler = (contentVal: string) => {
    setContent(contentVal);
  };

  const addNoteHandler = () => {
    if (!title && !content) {
      console.log("No title");
    } else {
      dispatch({
        type: "addNote",
        titlePayload: title,
        ContentPayload: content,
      });
    }
  };

  return (
    <div>
      <nav className="home-navbar">
        <div className="hamburger-menu" onClick={sideBarHandler}>
          <GiHamburgerMenu />
        </div>
        <div className="mid">
          <div>
            <input
              placeholder="Search"
              className="input-search"
              type="search"
            />
            <button className="btn-search" title="search">
              <BsSearch />
            </button>
          </div>

          <div>
            <TfiViewList title="List View" className="list-view" />
          </div>
        </div>
      </nav>

      <div className="center">
        <aside className="side-bar">
          <div className="aside-inner">
            {sideBarData.map((data) => (
              <div key={data.id} className="sideBar-item">
                <div className="sidebar-icon" title={data.title}>
                  {data.icon}
                </div>
                <p
                  id="sideBar-title"
                  className={displaySideBar ? "asideDisplay" : "asideHide"}
                >
                  {data.title}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <main className="main">
          <div className="inner-main-one">
            {inputFocusToggle ? (
              <div className="takeANote-input-container">
                <input
                  className="takeANote-input"
                  type="text"
                  placeholder="Take a note..."
                  onFocus={inputFocusHandler}
                ></input>
              </div>
            ) : (
              <div className="addNote-input-container">
                <form>
                  <input
                    value={title}
                    className="addANote-input"
                    type="text"
                    placeholder="Enter title..."
                    onChange={(e) => titleChangeHandler(e.target.value)}
                  ></input>

                  <input
                    value={content}
                    type="text"
                    className="addANote-input-ext"
                    placeholder="Take a note..."
                    onChange={(e) => noteContentChangeHandler(e.target.value)}
                  ></input>
                </form>
                <div className="addNote-inp-btns">
                  <div className="left-addNote-inp-btns">
                    <button className="btn" onClick={inputFocusHandler}>
                      Close
                    </button>
                    <button className="btn" onClick={addNoteHandler}>
                      Add Note
                    </button>
                  </div>

                  <div className="right-addNote-inp-btns">
                    <button className="btn" title="Pin note">
                      <BsFillPinFill />
                    </button>

                    <button
                      className="btn more-btn"
                      title="more"
                      onClick={moreBtnHandler}
                    >
                      <BsThreeDotsVertical />
                    </button>
                  </div>
                </div>

                <div
                  className="input-dropDown"
                  id={moreToggle ? "moreDropDownAppear" : "moreDropDownHide"}
                >
                  <p>Add label</p>
                  <p>Add image</p>
                  <p>Archive</p>
                </div>
              </div>
            )}
          </div>

          <div className="inner-main-two">{/* <p>Hello</p> */}</div>
        </main>
      </div>
    </div>
  );
};
