import { Form, Button } from "react-bootstrap";
import { CartState } from "../contexts/Context";
import Rating from "./Rating";

const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, byRating, sort },
    productDispatch,
  } = CartState();

  const starSelect = (index) => {
    productDispatch({
      type: "FILTER_BY_RATING",
      payload: index + 1,
    });
  };

  return (
    <div className="filters">
      <span className="filterTitle">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          starSelect={starSelect}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
