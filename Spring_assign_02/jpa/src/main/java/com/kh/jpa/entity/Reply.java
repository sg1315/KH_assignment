package com.kh.jpa.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

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

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "ref_bno", nullable = false)
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "reply_writer")
    private Member member;

    @Column(name = "create_date", nullable = false, updatable = false)
    private LocalDateTime createDate;

    @ColumnDefault("'Y'")
    @Column(nullable = false)
    private String status;

    @PrePersist
    public void prePersist() {
        this.createDate = LocalDateTime.now();
    }
}
