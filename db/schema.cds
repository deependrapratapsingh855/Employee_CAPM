namespace INC;

context EMP{
    @cds.persistence.exists
    entity EMPLOYEE{
        key ID : Integer;
        NAME : String(250);
    }
}
