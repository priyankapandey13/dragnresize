import "./App.css";
import { Resizable } from "re-resizable";

const style = {
  // display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  // // background: "#f0f0f0",
  // backgroundImage : `URL(https://robohash.org/1/?set=set2)`,
};
const content = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const header = {
  background: "#999999",
  color: "white",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

function App() {
  return (
    <div className="boxcontainer">
      <Resizable
        style={style}
        defaultSize={{ width: "30vw", height: "68vh" }}
        maxWidth="100%"
        minWidth="1"
        className="leftcontainer"
      >
        <div style={header}>Left Header</div>
        <div style={content}>
          Lorem ipsum dolor sit amet. Id error voluptas est commodi nesciunt sed
          dolorem praesentium. Non ducimus voluptate sit odio perspiciatis a
          enim fugiat? Hic rerum perspiciatis qui neque quia non ratione
          voluptatem sit unde doloremque aut repellendus culpa et unde iure est
          nihil distinctio. Eos tenetur voluptate hic maiores numquam ut
          laudantium repellendus sed voluptatibus nemo et dolorum repellat nam
          doloribus explicabo ut explicabo aliquam. Id saepe necessitatibus aut
          perferendis distinctio sit sint laudantium. Et magnam saepe id fugiat
          facere ea dolorum explicabo At odit blanditiis.
        </div>
      </Resizable>
      <Resizable
        style={style}
        defaultSize={{ width: "67vw", height: "68vh" }}
        maxWidth="100%"
        minWidth="1"
        className="centercontainer"
      >
        <div style={header}>Center Header</div>

        <p>
          Lorem ipsum dolor sit amet. Id error voluptas est commodi nesciunt sed
          dolorem praesentium. Non ducimus voluptate sit odio perspiciatis a
          enim fugiat? Hic rerum perspiciatis qui neque quia non ratione
          voluptatem sit unde doloremque aut repellendus culpa et unde iure est
          nihil distinctio. Eos tenetur voluptate hic maiores numquam ut
          laudantium repellendus sed voluptatibus nemo et dolorum repellat nam
          doloribus explicabo ut explicabo aliquam. Id saepe necessitatibus aut
          perferendis distinctio sit sint laudantium. Et magnam saepe id fugiat
          facere ea dolorum explicabo At odit blanditiis.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Id error voluptas est commodi nesciunt sed
          dolorem praesentium. Non ducimus voluptate sit odio perspiciatis a
          enim fugiat? Hic rerum perspiciatis qui neque quia non ratione
          voluptatem sit unde doloremque aut repellendus culpa et unde iure est
          nihil distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Id error voluptas est commodi nesciunt sed
          dolorem praesentium. Non ducimus voluptate sit odio perspiciatis a
          enim fugiat? Hic rerum perspiciatis qui neque quia non ratione
          voluptatem sit unde doloremque aut repellendus culpa et unde iure est
          nihil distinctio. Eos tenetur voluptate hic maiores numquam ut
          laudantium repellendus sed voluptatibus nemo et dolorum repellat nam
          doloribus explicabo ut explicabo aliquam. Id saepe necessitatibus aut
          perferendis distinctio sit sint laudantium. Et magnam saepe id fugiat
          facere ea dolorum explicabo At odit blanditiis.
        </p>
      </Resizable>

      <Resizable
        style={style}
        defaultSize={{ width: "98vw", height: "25vh" }}
        maxWidth="100%"
        minWidth="1"
        className="footer"
      >
        <div style={content}>
          <p>
            Lorem ipsum dolor sit amet. Id error voluptas est commodi nesciunt
            sed dolorem praesentium. Non ducimus voluptate sit odio perspiciatis
            a enim fugiat? Hic rerum perspiciatis qui neque quia non ratione
            voluptatem sit unde doloremque aut repellendus culpa et unde iure
            est nihil distinctio.
          </p>
          <p>
            Eos tenetur voluptate hic maiores numquam ut laudantium repellendus
            sed voluptatibus nemo et dolorum repellat nam doloribus explicabo ut
            explicabo aliquam. Id saepe necessitatibus aut perferendis
            distinctio sit sint laudantium. Et magnam saepe id fugiat facere ea
            dolorum explicabo At odit blanditiis.
          </p>
          <p>
            Ut aliquam voluptatibus eos laboriosam internos ea autem iure aut
            rerum assumenda eos corporis excepturi. Est galisum autem et rerum
            eveniet et asperiores dolor. Est molestiae velit id molestias
            quibusdam aut doloribus architecto rem delectus minima sit expedita
            expedita.
          </p>
        </div>
      </Resizable>
    </div>
  );
}

export default App;
