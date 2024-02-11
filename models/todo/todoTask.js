const oracledb = require("oracledb");

// Oracle 데이터베이스에 연결
oracledb.getConnection(
  {
    user: "swith",
    password: "swith",
    connectString: "localhost:1521/xe",
  },
  async function (err, connection) {
    if (err) {
      console.error("OracleDB 연결 오류!", err.message);
      return;
    }
    console.log("OracleDB에 연결되었습니다!");

    try {
      // 테이블 생성 쿼리 실행
      await connection.execute(
        `CREATE TABLE TodoTask (
          taskid NUMBER PRIMARY KEY,
          taskcontent VARCHAR2(255) NOT NULL,
          taskdate TIMESTAMP NOT NULL
        )`
      );

      console.log("TodoTask 테이블이 생성되었습니다.");
    } catch (err) {
      console.error("테이블 생성 오류:", err.message);
    } finally {
      // 연결 종료
      try {
        await connection.close();
        console.log("OracleDB 연결이 종료되었습니다!");
      } catch (err) {
        console.error("연결 닫기 오류:", err.message);
      }
    }
  }
);
