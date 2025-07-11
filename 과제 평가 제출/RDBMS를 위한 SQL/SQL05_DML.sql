--1)
INSERT INTO TB_CLASS_TYPE(PK_CLASS_TYPE_NO, CLASS_TYPE_NAME)
VALUES(01, '전공필수');
INSERT INTO TB_CLASS_TYPE(PK_CLASS_TYPE_NO, CLASS_TYPE_NAME)
VALUES(02, '전공선택');
INSERT INTO TB_CLASS_TYPE(PK_CLASS_TYPE_NO, CLASS_TYPE_NAME)
VALUES(03, '교양필수');
INSERT INTO TB_CLASS_TYPE(PK_CLASS_TYPE_NO, CLASS_TYPE_NAME)
VALUES(04, '교양선택');
INSERT INTO TB_CLASS_TYPE(PK_CLASS_TYPE_NO, CLASS_TYPE_NAME)
VALUES(05, '논문지도');


--2)
CREATE TABLE TB_학생일반정보
    AS (SELECT STUDENT_NO, STUDENT_NAME, STUDENT_ADDRESS
        FROM TB_STUDENT
);


--3)
CREATE TABLE TB_국어국문학과
AS (SELECT STUDENT_NO, STUDENT_NAME, SUBSTR(TO_CHAR(TO_DATE(SUBSTR(STUDENT_SSN, 1, 6), 'RRMMDD'), 'RRRRMMDD'), 1, 4) AS "출생년도", PROFESSOR_NAME
    FROM TB_STUDENT
    JOIN TB_PROFESSOR ON (COACH_PROFESSOR_NO = PROFESSOR_NO)
);


--4)
UPDATE TB_DEPARTMENT
SET CAPACITY = ROUND(CAPACITY*1.1);


--5)
UPDATE TB_STUDENT
SET STUDENT_ADDRESS = '서울시 종로구 숭인동 181-21'
WHERE STUDENT_NO = 'A413042';


--6)
UPDATE TB_STUDENT
SET STUDENT_SSN = SUBSTR(STUDENT_SSN,1, 6);


--7)
UPDATE TB_GRADE
SET POINT = 3.5
WHERE CLASS_NO = (SELECT CLASS_NO
                    FROM TB_GRADE
                    JOIN TB_CLASS USING (CLASS_NO)
                    JOIN TB_STUDENT USING (STUDENT_NO)
                    WHERE STUDENT_NAME = '김명훈'
                    AND TERM_NO = '200501'
                    AND CLASS_NAME = '피부생리학'
                    AND ROWNUM = '1'
                    )
AND STUDENT_NO = (SELECT STUDENT_NO
                    FROM TB_GRADE
                    JOIN TB_CLASS USING (CLASS_NO)
                    JOIN TB_STUDENT USING (STUDENT_NO)
                    WHERE STUDENT_NAME = '김명훈'
                    AND TERM_NO = '200501'
                    AND CLASS_NAME = '피부생리학'
                    AND ROWNUM = '1'
                    );
ROLLBACK;


--8)
DELETE FROM TB_GRADE
WHERE STUDENT_NO IN (SELECT STUDENT_NO
                     FROM TB_STUDENT
                     WHERE ABSENCE_YN = 'Y');

