package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    @Override
    public String createMember(MemberDto.Create createDto) {
        Member member = createDto.toEntity();
        memberRepository.save(member);
        return member.getUserId();
    }

    @Transactional(readOnly = true)
    @Override
    public MemberDto.Response findMember(String userId) {
        return memberRepository.findOne(userId)
                .map(MemberDto.Response::toDto)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));
    }

    @Override
    public MemberDto.Response updateMember(String userId, MemberDto.Update updateDto) {
        Member member = memberRepository.findOne(userId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));
        member.updateMemberInfo(
                updateDto.getUser_name(),
                updateDto.getEmail()
        );
        return MemberDto.Response.toDto(member);
    }

    @Override
    public void deleteMember(String userId) {
        Member member = memberRepository.findOne(userId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));
        memberRepository.delete(member);
    }
}
