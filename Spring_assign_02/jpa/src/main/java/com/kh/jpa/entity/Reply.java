package com.kh.jpa.entity;

import com.kh.jpa.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Clob;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
@Getter
@Table(name = "REPLY")
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reply_no")
    private Long replyNo;

    @Lob
    @Column(name = "reply_content", length = 400, nullable = false)
    private Clob replyContent;

    //어떤게시글의 댓글인지 게시글 정보
    //댓글 : 게시글 (N : 1)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ref_bno", nullable = false)
    private Board board;

    //어떤사람의 댓글인지 작성자 정보
    //댓글 : 작성자 (N : 1)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reply_writer")
    private Member member;

    @Column(name = "create_date", nullable = false, updatable = false)
    private LocalDateTime createDate;

    @Column(length = 1, nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.Status status;


    @PrePersist
    protected void prePersist() {
        this.createDate = LocalDateTime.now();
        if (status == null) {
            this.status = CommonEnums.Status.Y;
        }
    }
}
