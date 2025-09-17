CREATE PROCEDURE dbo.usp_InsertOceny
  @Rating       INT,
  @Ekspercka    NUMERIC(10,1) = NULL,
  @Pokorekcie   NUMERIC(10,1) = NULL,
  @Podsumowanie NVARCHAR(2048) = NULL,
  @CK01         BIT = NULL
AS
BEGIN
  SET NOCOUNT ON;

  INSERT INTO dbo.OCENY_
(Rating, Ekspercka, Pokorekcie, Podsumowanie, CK01)
  VALUES
    (@Rating, @Ekspercka, @Pokorekcie, @Podsumowanie, @CK01);

  -- Opcjonalnie zwróć ID nowego rekordu
  SELECT SCOPE_IDENTITY() AS NewID;
END
GO

---------

EXEC dbo.usp_InsertOceny
  @Rating = {I:Rating},
  @Ekspercka = {I:Ekspercka},
  @Pokorekcie = {I:Pokorekcie},
  @Podsumowanie = N'{I:Podsumowanie}',
  @CK01 = {I:CK01};

