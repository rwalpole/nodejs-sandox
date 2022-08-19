public boolean processRow() throws HopException {
  if (first) {
    first = false;

    /* TODO: Your code here. (Using info fields)

    FieldHelper infoField = get(Fields.Info, "info_field_name");

    RowSet infoStream = findInfoRowSet("info_stream_tag");

    Object[] infoRow = null;

    int infoRowCount = 0;

    // Read all rows from info transform before calling getRow() method, which returns first row from any
    // input rowset. As rowMeta for info and input transforms varies getRow() can lead to errors.
    while((infoRow = getRowFrom(infoStream)) != null){

      // do something with info data
      infoRowCount++;
    }
    */
  }

  Object[] r = getRow();

  if (r == null) {
    setOutputDone();
    return false;
  }

  // It is always safest to call createOutputRow() to ensure that your output row's Object[] is large
  // enough to handle any new fields you are creating in this transform.
  r = createOutputRow(r, data.outputRowMeta.size());

  /* TODO: Your code here. (See Sample)

  // Get the value from an input field
  String foobar = get(Fields.In, "a_fieldname").getString(r);

  foobar += "bar";
    
  // Set a value in a new output field
  get(Fields.Out, "output_fieldname").setValue(r, foobar);

  */
  // Send the row on to the next transform.
  putRow(data.outputRowMeta, r);

  return true;
}
