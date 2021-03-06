import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const RowRadioButtonsGroup = ({ handleChangeArea, selectedRadioButtons }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Axis</FormLabel>
    <RadioGroup
      row
      aria-label="axis"
      name="row-radio-buttons-group"
      defaultValue={selectedRadioButtons}
      onChange={(event) => {
        handleChangeArea(event.target.value);
      }}
    >
      <FormControlLabel value="x" control={<Radio />} label="x" />
      <FormControlLabel value="y" control={<Radio />} label="y" />
      <FormControlLabel value="z" control={<Radio />} label="z" />
    </RadioGroup>
  </FormControl>
);

export default RowRadioButtonsGroup;
